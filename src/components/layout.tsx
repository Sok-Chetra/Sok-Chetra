
import React from 'react'
import { Navbar } from './ui/navbar'

export const Layout = ({
   children
}: {
   children: React.ReactNode
}) => {
   return (
      <div className='overflow-x-hidden min-w-[280px] min-h-[950px]'>
         <Navbar />
         {children}
      </div>
   )
}
