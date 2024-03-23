'use client';

import React, { HTMLAttributeAnchorTarget, useState } from 'react'
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useCookies } from 'next-client-cookies';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Link, usePathname } from '@/lib/next-intl-navigation';
import { useLocale } from 'next-intl';

export const SwitcherLang = () => {
   const [isOpen, setIsOpen] = useState(false);
   const cookie = useCookies();
   const router = useRouter();
   const path = usePathname()
   const locale = useLocale()

   const handleOpenDropdown = () => {
      setIsOpen(!isOpen);
   }

   return (
      <div>
         <div className='h-full '>
            <Button variant={'ghost'} onClick={handleOpenDropdown} className='uppercase w-20 rounded-none flex gap-2 hover:bg-transparent hover:underline hover:text-white text-white font-semibold'>
               {locale} <ChevronDown className={cn('w-4 h-4', { 'rotate-180': isOpen })} />
            </Button>
            <span className={cn('hidden flex-col absolute bg-gray-100 dark:bg-slate-800 divide-y-2 z-50 border border-gray-300 rounded-sm', { 'flex': isOpen })}>
               <div className={cn('flex flex-col', { 'flex-col-reverse': locale === 'kh' })}>
                  <Button variant={'link'} className={cn('rounded-none dark:text-gray-50 block')} asChild>
                     <Link href={path} locale="kh" hrefLang='kh'>Khmer</Link>
                  </Button>
                  <Button
                     asChild
                     variant={'link'}
                     className={cn('rounded-none w-20 dark:text-gray-50 block')}
                  >
                     <Link href={path} locale="en" hrefLang='en'>English</Link>
                  </Button>

               </div>
            </span>
         </div>
      </div>
   )
}
