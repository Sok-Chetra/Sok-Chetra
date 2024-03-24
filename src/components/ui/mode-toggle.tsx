"use client";

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useCookies } from "next-client-cookies"
import { cn } from "@/lib/utils"

export function ModeToggle() {
   const { theme, setTheme } = useTheme()
   const cookie = useCookies()
   const themed = cookie.get('theme')

   return (
      <Button
         variant={"ghost"}
         className={cn("bg-transparent hover:bg-transparent lg:w-20 md:w-14")}
         onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            cookie.set("theme", theme === "dark" ? "light" : "dark")
         }}>
         {themed === "light" ? <Moon className="md:w-5 w-6 md:h-5 h-6" /> : <Sun className="md:w-6 w-7 md:h-6 h-7" />}
         <span className="sr-only">theme</span>
      </Button>
   )
}