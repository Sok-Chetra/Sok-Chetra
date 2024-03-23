import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger >
        <Menu />
        <span className='sr-only'>open</span>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <div>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
