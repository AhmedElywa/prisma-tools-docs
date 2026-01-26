'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { memo } from 'react';

interface DocsPageWrapperProps {
  children: React.ReactNode;
}

export const DocsPageWrapper = memo(function DocsPageWrapper({ children }: DocsPageWrapperProps) {
  const pathname = usePathname();

  // Only animate docs pages, and only animate the main content
  if (!pathname.startsWith('/docs')) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
});
