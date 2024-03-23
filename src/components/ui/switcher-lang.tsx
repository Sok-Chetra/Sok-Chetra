'use client';

import Link from 'next/link';
import React, { HTMLAttributeAnchorTarget, useState } from 'react'
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useCookies } from 'next-client-cookies';
import { ChevronDown } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';

export const SwitcherLang = () => {
   const [isOpen, setIsOpen] = useState(false);
   const cookie = useCookies();
   const router = useRouter();

   const handleOpenDropdown = () => {
      setIsOpen(!isOpen);
   }

   const handChangeLanguage = (lang: 'en' | 'kh', e: React.MouseEvent<HTMLButtonElement>) => {
      const url = `/${lang}`
      router.push(url);
      router.refresh();
   }

   return (
      <div>
         <div className='h-full'>
            <Button variant={'ghost'} onClick={handleOpenDropdown} className='uppercase w-20 rounded-none flex gap-2'>
               {cookie.get('NEXT_LOCALE')} <ChevronDown className={cn('w-4 h-4', { 'rotate-180': isOpen })} />
            </Button>
            <span className={cn('hidden flex-col absolute bg-gray-100 dark:bg-slate-800 divide-y-2', { 'flex': isOpen })}>
               <Button
                  variant={'link'}
                  className='rounded-none w-20 dark:text-gray-50'
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handChangeLanguage('en', e); }}
               >
                  EN
               </Button>
               <Button variant={'link'} className='rounded-none w-20 dark:text-gray-50' onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handChangeLanguage('kh', e); }}>
                  KH
               </Button>
            </span>
         </div>
      </div>
   )
}
