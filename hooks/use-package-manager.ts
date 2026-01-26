'use client';
import { useCallback, useEffect, useState } from 'react';

export type PackageManager = 'npm' | 'yarn' | 'pnpm';

const STORAGE_KEY = 'paljs-docs-package-manager';
const DEFAULT_PACKAGE_MANAGER: PackageManager = 'pnpm';

// Custom event name for cross-component synchronization
const PACKAGE_MANAGER_CHANGE_EVENT = 'packageManagerChange';

export function usePackageManager() {
  const [packageManager, setPackageManagerState] = useState<PackageManager>(DEFAULT_PACKAGE_MANAGER);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load package manager preference from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && ['npm', 'yarn', 'pnpm'].includes(stored)) {
        setPackageManagerState(stored as PackageManager);
      }
    } catch (error) {
      // Handle localStorage access errors (SSR, private browsing, etc.)
      console.warn('Failed to load package manager preference from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Listen for package manager changes from other components on the same page
  useEffect(() => {
    const handlePackageManagerChange = (event: CustomEvent<PackageManager>) => {
      setPackageManagerState(event.detail);
    };

    // Listen for custom events from other components
    window.addEventListener(PACKAGE_MANAGER_CHANGE_EVENT, handlePackageManagerChange as EventListener);

    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue) {
        if (['npm', 'yarn', 'pnpm'].includes(event.newValue)) {
          setPackageManagerState(event.newValue as PackageManager);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(PACKAGE_MANAGER_CHANGE_EVENT, handlePackageManagerChange as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update package manager preference and save to localStorage
  const setPackageManager = useCallback((newPackageManager: PackageManager) => {
    setPackageManagerState(newPackageManager);

    try {
      localStorage.setItem(STORAGE_KEY, newPackageManager);

      // Dispatch custom event to notify other components on the same page
      const event = new CustomEvent(PACKAGE_MANAGER_CHANGE_EVENT, {
        detail: newPackageManager,
      });
      window.dispatchEvent(event);
    } catch (error) {
      // Handle localStorage access errors
      console.warn('Failed to save package manager preference to localStorage:', error);
    }
  }, []);

  return {
    packageManager,
    setPackageManager,
    isLoaded, // Useful for avoiding hydration mismatches
  };
}
