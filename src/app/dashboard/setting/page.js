"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Setting() {
    const router = useRouter()

    const back = ()=>{
        router.push('/dashboard')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <button onClick={back} className='bg-blue-500 rounded text-white py-2 px-4'>back</button>
     <h1>Setting Page</h1>
    </main>
  )
}

export default Setting