import React from 'react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header>
        <div className='container mx-auto flex items-center justify-between p-10'>
            <h1 className='font-bold text-5xl'>TODO APP</h1>
            <Button>QO'SHISIH</Button>
        </div>
    </header>
  )
}
