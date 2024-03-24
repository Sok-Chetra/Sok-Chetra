import React from 'react'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { SwitcherLang } from './switcher-lang'
import { NavButtons } from './nav-buttons'
import { links } from './nav-buttons'
import { Button } from './button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const SideNav = () => {
   const t = useTranslations('Nav-Button');

   return (
      <Sheet>
         <SheetTrigger >
            <Menu />
            <span className='sr-only'>open</span>
         </SheetTrigger>
         <SheetContent side={"right"} className='bg-gray-50 dark:bg-slate-900 '>
            <SheetHeader className='items-start'>

               <SheetClose>
                  <ModeToggle />
               </SheetClose>
            </SheetHeader>
            <div className='h-full pt-20'>
               <ul className='flex md:flex-row flex-col'>
                  {links.map((link) => (
                     <li key={link.id}>
                        <SheetClose asChild>
                           <Button
                              variant={"ghost"}
                              asChild
                              className='hover:bg-transparent md:hover:border-b-2 md:hover:border-l-0 hover:border-l-2 md:justify-center justify-start rounded-none hover:border-slate-900 dark:hover:border-gray-200 text-base md:h-full h-12'
                           >
                              <Link href={`${link.url}`}>
                                 {t(`${link.title}`)}
                              </Link>
                           </Button>
                        </SheetClose>
                     </li>
                  ))}
               </ul>
            </div>
         </SheetContent>
      </Sheet>
   )
}
