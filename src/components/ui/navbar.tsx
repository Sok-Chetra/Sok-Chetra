'use client';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { SideNav } from './sidenav';
import { ModeToggle } from './mode-toggle';
import { SwitcherLang } from './switcher-lang';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NavButtons } from './nav-buttons';


export const Navbar = () => {
   const t = useTranslations('Nav-Button');
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPos = window.pageYOffset;
         const visible = prevScrollPos > currentScrollPos || currentScrollPos < 5; // Adjust the threshold as needed

         setVisible(visible);
         setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, [prevScrollPos]);

   return (
      <header>
         {/* className={cn('fixed w-full bg-gray-50 dark:bg-slate-900 z-50 top-0 transition-all duration-300 shadow-sm drop-shadow-sm dark:shadow-slate-800')} */}
         <nav
            className={cn('fixed w-full bg-gray-50 dark:bg-slate-900 z-50 top-0 transition-all ease-in-out duration-300 opacity-0 -translate-y-full shadow-md drop-shadow-md dark:shadow-slate-800', { 'opacity-100 translate-y-0': visible })}
         >
            <ul className='container mx-auto flex justify-between items-center h-20 sm:px-10 px-5'>
               <li>
                  <h2 className="dark:text-white text-black text-2xl md:text-3xl font-semibold font-koho p-1">
                     {t('sok-chetra')}
                  </h2>
               </li>
               <li className='md:flex hidden'>
                  <NavButtons />
               </li>
               <li className='md:flex hidden'>
                  <ul className='flex items-center'>
                     <li>
                        <SwitcherLang />
                     </li>
                     <li>
                        <ModeToggle />
                     </li>
                  </ul>

               </li>
               <li className={cn("md:hidden block")}>
                  <ul className='flex items-center'>
                     <li>
                        <SwitcherLang />
                     </li>
                     <li>
                        <SideNav />
                     </li>
                  </ul>


               </li>
            </ul>
         </nav>
      </header>

   )
}
