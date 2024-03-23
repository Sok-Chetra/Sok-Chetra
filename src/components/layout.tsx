
import React from 'react'
import { Navbar } from './ui/navbar'

export const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
