'use client';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { Link, usePathname } from '@/lib/next-intl-navigation';

export const SwitcherLang = () => {
   const [isOpen, setIsOpen] = useState(false);
   const path = usePathname()
   const locale = useLocale()

   const handleOpenDropdown = () => {
      setIsOpen(!isOpen);
   }

   return (
      <div className='h-full'>
         <Button
            variant={'ghost'}
            onClick={handleOpenDropdown}
            className='uppercase w-20 rounded-none flex gap-2 hover:bg-transparent hover:underline hover:text-slate-900 dark:hover:text-gray-50 dark:text-gray-50 text-slate-900 font-semibold'
         >
            {locale}
            <ChevronDown className={cn('w-4 h-4', { 'rotate-180': isOpen })} />
         </Button>
         <span className={cn('hidden flex-col absolute bg-gray-100 dark:bg-slate-800 divide-y-2 z-50 border border-gray-300 rounded-sm', { 'flex': isOpen })}>
            <div className={cn('flex flex-col', { 'flex-col-reverse': locale === 'kh' })}>
               <Button
                  variant={'link'}
                  className={cn('rounded-none dark:text-gray-50 text-slate-900 block text-center')}
                  asChild
               >
                  <Link
                     href={path}
                     locale="kh"
                     hrefLang='kh'
                  >
                     ខ្មែរ
                  </Link>
               </Button>
               <Button
                  asChild
                  variant={'link'}
                  className={cn('rounded-none w-20 dark:text-gray-50 block text-center')}
               >
                  <Link
                     href={path}
                     locale="en"
                     hrefLang='en'
                  >
                     English
                  </Link>
               </Button>
            </div>
         </span>
      </div>
   )
}
