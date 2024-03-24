import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const links = [
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

export const NavButtons = () => {
   const t = useTranslations('Nav-Button');

   return (
      <ul className='flex md:flex-row flex-col'>
         {links.map((link) => (
            <li key={link.id}>
               <Button
                  variant={"ghost"}
                  asChild
                  className='hover:bg-transparent md:hover:border-b-2 md:hover:border-l-0 hover:border-l-2 md:justify-center justify-start rounded-none hover:border-slate-900 dark:hover:border-gray-200 text-base md:h-full h-12'
               >
                  <Link href={`${link.url}`}>
                     {t(`${link.title}`)}
                  </Link>
               </Button>
            </li>
         ))}
      </ul>
   )
}
