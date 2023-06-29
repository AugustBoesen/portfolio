import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='p-2 w-full'>
                <nav className='flex justify-evenly flex-col sm:flex-row'>
                  <Link href='/' className='navbutton'>Home</Link>
                  <Link href='music' className='navbutton'>Music & Audio</Link>
                  <Link href='events' className='navbutton'>Events & Associations</Link>
                  <Link href='biography' className='navbutton'>About & Contact</Link>
                </nav>
    </div>
  )
}

export default Header