"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
<<<<<<< HEAD
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
=======
import { Avatar, AvatarFallback } from './ui/avatar'
>>>>>>> dan
import { Session } from 'next-auth'

const Header = ({ session }: { session: Session }) => {
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
<<<<<<< HEAD
        <Link href="/my-profile">
        <Avatar>
          
          <AvatarFallback className='bg-yellow-100'>{session?.user?.name?.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
        </Avatar>
        </Link>
=======
       <Link href="/my-profile">
       <Avatar>
        <AvatarFallback className='bg-light-200 text-gray-600'>
          {session.user?.name?.[0] ?? "U"}
        </AvatarFallback>
       </Avatar>
       </Link>
>>>>>>> dan
      </li>
    </ul>
    </header>
  )
}

export default Header
