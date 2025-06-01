"use client";
import { useState, useEffect, useCallback } from "react";

export type PackageManager = "npm" | "yarn" | "pnpm";

const STORAGE_KEY = "paljs-docs-package-manager";
const DEFAULT_PACKAGE_MANAGER: PackageManager = "pnpm";

export function usePackageManager() {
  const [packageManager, setPackageManagerState] = useState<PackageManager>(
    DEFAULT_PACKAGE_MANAGER
  );
  const [isLoaded, setIsLoaded] = useState(false);

  // Load package manager preference from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && ["npm", "yarn", "pnpm"].includes(stored)) {
        setPackageManagerState(stored as PackageManager);
      }
    } catch (error) {
      // Handle localStorage access errors (SSR, private browsing, etc.)
      console.warn(
        "Failed to load package manager preference from localStorage:",
        error
      );
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Update package manager preference and save to localStorage
  const setPackageManager = useCallback((newPackageManager: PackageManager) => {
    setPackageManagerState(newPackageManager);

    try {
      localStorage.setItem(STORAGE_KEY, newPackageManager);
    } catch (error) {
      // Handle localStorage access errors
      console.warn(
        "Failed to save package manager preference to localStorage:",
        error
      );
    }
  }, []);

  return {
    packageManager,
    setPackageManager,
    isLoaded, // Useful for avoiding hydration mismatches
  };
}
