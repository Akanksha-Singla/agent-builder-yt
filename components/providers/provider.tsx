'use client'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '../ui/toast'
import { QueryProvider } from './query-provider'
   
export function Provider({ children }: { children: React.ReactNode }) {
  return( <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
    <TooltipProvider>  <QueryProvider>{children}</QueryProvider></TooltipProvider> 
    {/* <Toaster/> */}
   
    </ThemeProvider>)
} 