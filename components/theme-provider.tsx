'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import { ReactNode } from 'react'

export function ThemeProvider({ children, ...props }: { children: ReactNode } & ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}