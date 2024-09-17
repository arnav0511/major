"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function sidenav() {    

    const MenuList=[
        {
            name:"Home",
            path:"/dashboard"
        },
        {
            name:"History",
            path:"/dashboard/history"
        },
        {
            name:"Setting",
            path:"/dashboard/setting"
        },
    ]

    const path= usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='h-screen p-4'>
        <div className='justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
        </div>

        <div>
            {MenuList.map((menu,index)=>(
                <div className={'cursor-pointer items-center'}>
                    <h3>{menu.name}</h3>
                </div>

            ))}
        </div>
    </div>
  )
}

export default sidenav