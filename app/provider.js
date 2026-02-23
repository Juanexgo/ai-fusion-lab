import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/_components/AppSidebar"
import AppHeader from './_components/AppHeader'

function Provider({ children, ...props }) {
    return (
        // Proveedor global de tema (light/dark/system) para toda la app.
        <NextThemesProvider {...props}
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
                {/* Contexto de sidebar compartido entre header/contenido. */}
                <SidebarProvider>
                    <AppSidebar />

                    {/* Estructura principal: header fijo arriba + páginas hijas */}
                    <div className='w-full'>
                     <AppHeader />{children}</div>
                </SidebarProvider> 
        </NextThemesProvider>
    )
}

export default Provider
