"use client"

import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

export function AppSidebar() {
  const { theme, setTheme } = useTheme()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={60}
                height={60}
                className="h-[40px] w-[40px]"
              />
              <h2 className="text-xl font-bold">AI Fusion</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
          <Button className="mt-7 w-full" size="lg">+ New Chat</Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className={ "p-3"}>
          <div className={"p-3"}>
            <h2 className=" font-bold text-lg">Chat</h2>
            <p className="text-sm text-gray-400">Sign in to start chating multiple AI model</p>
          </div>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className=" p-3 mb-10">
          <Button className={"w-full"} size= {"lg"}>Sign In / Sign Up</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
