'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const isTestEnvironment = process.env.NODE_ENV === 'test';

  // Render ThemeProvider only if not in a test environment
  return !isTestEnvironment ? (
    <ThemeProvider storageKey='theme' attribute='class'>
      {children}
    </ThemeProvider>
  ) : (
    <>{children}</>
  );
};

export default Providers;
