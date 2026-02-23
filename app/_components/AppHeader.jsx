import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AiMultiModels from './AiMultiModels'

function AppHeader() {
  return (
<div className='p-3 w-full shadow flex justify-between items-center'>
  {/* Botón que abre/cierra el sidebar en pantallas pequeñas. */}
  <SidebarTrigger/>
  {/* CTA temporal para autenticación. */}
  <Button>Sign In</Button>
</div>
  )
}

export default AppHeader
