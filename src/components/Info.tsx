/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { profilepic } from '@/img'

import Age from './subcomponents/Age'
import Greeter from './subcomponents/Greeter'

import Link from 'next/link'
import Router from 'next/router'
import musicpage from '../pages/music'

const Info = () => {
  return (
    <div className='flex flex-col lg:flex-row absolute w-full mt-36 top-1/3 md:top-1/4 lg:mt-24 pb-16 bg-opacity-50 bg-black'>
      <div className='flex flex-col text-center lg:text-left m-8 lg:ml-16'>
        <div className=' my-4 text-2xl md:text-4xl'><Greeter/></div>
        <div className=' text-sm md:text-lg'>
            <div className='py-1'>If you find yourself here, you might be in need of a <i>producer</i>. were it an event, 
                software or music, you're definitely looking from the right places.</div>
            <div className='py-1'>My name is Severi. I'm a <Age/> year old finnish fellow with a passion to create and a 
                drive to innovate. I've been a part of making music in many forms, different kinds of events and am currently studying computer information technology at JAMK.</div>
            <div className='py-1'>Instead of me just using big words to describe myself, however, I made this site myself in order to showcase my works. 
                Right now you are looking at a website made with 
                <div className='inline text-teal-200'> Next.js</div> and 
                <div className='inline text-cyan-200'> Tailwind </div> 
                using 
                <div className='inline text-green-200'> HTML</div>, 
                <div className='inline text-sky-200'> TypeScript</div> and 
                <div className='inline text-emerald-200'> CSS</div>.</div>
              <div className='py-1'>Get to know me & my skillset and shoot me a message if anything piques your interest!</div>
        </div>
    </div>
        <div className='flex flex-col '>
        <Image src={profilepic} alt="profilepic" className='mt-10 w-[40%] self-center rounded-e-full rounded-t-full'/>
        </div>
    </div>

  )
}

export default Info