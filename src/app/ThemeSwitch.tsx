'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react";
import { cn } from '@/lib/utils';

export default function ThemeSwitch({className} : {className?: String}) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return;
  
  if (resolvedTheme === 'dark') {
    return <Sun className={cn(className, 'w-6 h-6')} onClick={() => setTheme('light')} />
  }
  if (resolvedTheme === 'light') {
    return <Moon className={cn(className, 'w-6 h-6')} onClick={() => setTheme('dark')} />
  }
}