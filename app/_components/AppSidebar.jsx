"use client"

import { useEffect, useState } from "react"
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
import { Bolt, Moon, Sun, User2, Zap } from "lucide-react"
import { useUser, SignInButton } from "@clerk/clerk-react"
import UsageCreditProgress from "./UsageCreditProgress"

export function AppSidebar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const {user} = useUser()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={'/logo.svg'}
                alt="Logo"
                width={60}
                height={60}
                className="h-[40px] w-[40px]"
              />
              <h2 className="text-xl font-bold">AI Fusion</h2>
            </div>
            {/* Evita mismatch SSR/CSR con next-themes. */}
            {mounted && (
              theme === "light" ? (
                <Button variant={"ghost"} onClick={() => setTheme("dark")}>
                  <Sun />
                </Button>
              ) : (
                <Button variant={"ghost"} onClick={() => setTheme("light")}>
                  <Moon />
                </Button>
              )
            )}
          </div>
          {user ? (
            <Button className="mt-7 w-full" size="lg">
              + New Chat
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="mt-7 w-full" size="lg">
                + New Chat
              </Button>
            </SignInButton>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className={"p-3"}>
            <h2 className=" font-bold text-lg">Chat</h2>
            {!user && <p className="text-sm text-gray-400">Sign in to start chating multiple AI model</p>}
          </div>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className=" p-3 mb-10">
          {!user? <SignInButton mode="modal">
            <Button className={'w-full'} size= {'lg'}>Sign In / Sign Up</Button>
          </SignInButton>
          :
          <div>
            <UsageCreditProgress />
            <Button className={'w-full mb-3'}> <Zap /> Upgrade Plan </Button>
            <Button className="flex " variant={"ghost"}>
              <User2 /> <h2>Settings</h2>
            </Button>
          </div>
          }
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
