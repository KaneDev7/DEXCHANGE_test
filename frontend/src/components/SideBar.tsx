"use client"
import React from 'react'
import AccordionConfig from './ui/AccordionConfig'
import AccordionFolder from './ui/AccordionFolder'
import { MdLogout } from 'react-icons/md'
import { useRouter } from 'next/navigation'

export default function SideBar() {
  const router = useRouter()
  return (
    <div
      style={{
        backgroundImage: "url(/imges/sidebar.png)",
        backgroundSize: '100% 100vh '
      }}
      className='min-w-[256px] h-screen flex flex-col '
    >
      <div className='w-full h-[64px] flex justify-center items-center bg-primary1 text-Secondary2 font-bold'>
        <h1>DEXCHANGE</h1>
      </div>

      <ul className='flex-1 space-y-4 p-4'>
        <AccordionConfig>
          <button onClick={() => router.push('/')}  className='w-full  p-2  text-Secondary2  bg-primary2 rounded-[10px] text-sm'>
            LISTE USERS
          </button>
        </AccordionConfig>
        <AccordionFolder> </AccordionFolder>
      </ul>

      <div className='w-full h-[100px] py-4 flex justify-start items-start text-Secondary2 font-bold cursor-pointer'>
        <div className='p-4 flex justify-start items-center gap-2 '>
          <MdLogout size={40} />
          <p className='text-xs font-light'>Deconnexion</p>
        </div>
      </div>
    </div>
  )
}
