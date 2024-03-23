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
      className={cn("bg-transparent hover:bg-transparent")}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        cookie.set("theme", theme === "dark" ? "light" : "dark")
      }}>
      {themed === "light" ? <Moon className="w-8 h-8" /> : <Sun className="w-8 h-8" />}
      <span className="sr-only">theme</span>
    </Button>
  )
}