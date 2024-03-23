'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ModeToggle } from './mode-toggle';
import { SideNav } from './sidenav';
import { cn } from '@/lib/utils';
import { Button } from './button';
import Link from 'next/link';
import { SwitcherLang } from './switcher-lang';
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; }[] = [
   {
      title: "about-me",
      href: "#about-me",
   },
   {
      title: "experience",
      href: "#experience",
   },
   {
      title: "skills",
      href: "#skills",
   },
   {
      title: "contact-me",
      href: "#contact-me",
   },
]

const links = [
   {
      id: 2,
      title: "about-me",
      url: "#about-me"
   },
   {
      id: 3,
      title: "experience",
      url: "#experience"
   },
   {
      id: 4,
      title: "skills",
      url: "#skills"
   },
   {
      id: 5,
      title: "contact-me",
      url: "#contact-me"
   },
]

export const Navbar = () => {
   const t = useTranslations('Nav-Button');
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPos = window.pageYOffset;
         const visible = prevScrollPos > currentScrollPos;

         setVisible(visible);
         setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, [prevScrollPos]);

   return (
      // <div className='w-full h-20 bg-gray-300 container mx-auto flex justify-between items-center'>
      //   <div>logo</div>
      //   <NavigationMenu>
      //     <NavigationMenuList>

      //       {components.map((component, comIndex) => (
      //         <NavigationMenuItem key={comIndex}>
      //           <Link href={`${component.href}`} legacyBehavior passHref>
      //             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      //               {t(component.title)}
      //             </NavigationMenuLink>
      //           </Link>
      //         </NavigationMenuItem>
      //       ))}
      //     </NavigationMenuList>
      //   </NavigationMenu>
      //   <div>
      //     <NavigationMenu>
      //       <NavigationMenuList>
      //         <NavigationMenuItem>
      //           <SwitcherLang />
      //         </NavigationMenuItem>
      //         <NavigationMenuItem>
      //           <ModeToggle />
      //         </NavigationMenuItem>
      //       </NavigationMenuList>
      //     </NavigationMenu>
      //   </div>
      // </div>
      <header>
         {/* className={cn('fixed w-full bg-gray-50 dark:bg-slate-900 z-50 top-0 transition-all duration-300 opacity-0 -translate-y-full', { 'opacity-100 translate-y-0': visible })} */}
         <nav
            className={cn('fixed w-full bg-gray-50 dark:bg-slate-900 z-50 top-0 transition-all duration-300 shadow-sm drop-shadow-sm')}
         >
            <ul className='container mx-auto flex justify-between items-center h-20 sm:px-10 px-5'>
               <li>
                  <h2 className="dark:text-white text-black text-2xl md:text-3xl font-semibold font-koho p-1">{t('sok-chetra')}</h2>
               </li>
               <li className='md:flex hidden'>
                  <ul className='flex'>
                     {links.map((link) => (
                        <li key={link.id}>
                           <Button
                              variant={"ghost"}
                              asChild
                              className='hover:bg-transparent hover:border-b-2 rounded-none hover:border-slate-900'
                           >
                              <Link href={`${link.url}`}>
                                 {t(`${link.title}`)}
                              </Link>
                           </Button>
                        </li>
                     ))}
                  </ul>
               </li>
               <li className='md:flex hidden'>
                  <ul className='flex items-center'>
                     <li><SwitcherLang /></li>
                     <li><ModeToggle /></li>
                  </ul>

               </li>
               <li className={cn("md:hidden block")}>
                  <SideNav />

               </li>
            </ul>
         </nav>
      </header>

   )
}
