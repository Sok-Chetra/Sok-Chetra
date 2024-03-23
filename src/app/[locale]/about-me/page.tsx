"use client"
import { useTranslations } from "next-intl"

export default function AboutMe() {
   const trans = useTranslations("about-me-page")
   return (
      <div className='container mx-auto sm:px-10 px-5'>
         <p>{trans('about-me')}</p>
      </div>

   )
}