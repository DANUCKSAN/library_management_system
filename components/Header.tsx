"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href={'/'}>
       <Image src={'/icons/logo.svg'} alt='Bookwise logo' width={40} height={32}/>
      </Link>
    <ul className='flex items-center flex-row gap-8'>
      <li>
        <Link href={'/library'} className={cn(
          'text-base cursor-pointer capitalize',
          pathname === '/library' ? 'text-light-200 font-semibold' : 'text-gray-600'
        )}>
          Library
        </Link>
      </li>
      <li>
        <Link href={'/authors'} className={cn(
          'text-base cursor-pointer capitalize',
          pathname === '/authors' ? 'text-blue-500 font-semibold' : 'text-gray-600'
        )}>
          Authors
        </Link>
      </li>
    </ul>
    </header>
  )
}

export default Header
