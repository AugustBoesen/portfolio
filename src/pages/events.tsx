/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {Header} from "@/components"
import {earthbg1} from "@/img"
import Image from "next/image"
import Link from 'next/link'
import '../styles/globals.css'
import Head from "next/head";

export default function events() {
  return (
    <div className="m-0 w-full flex justify-center flex-col">
                  <Head>
        <title>Boesen.dev - Events</title>
        <meta
          name="description"
          content="Information about experience regarding events & associations"
        />
      </Head>
    <Image src={earthbg1} alt="topbg" className="z-[-1] fixed w-full opacity-80 top-1/4"/>
    <Header/>
      <div className='mx-6 md:mx-16 mt-16 bg-opacity-50 bg-black'>
      <h1 className='header1'>Events & Associations</h1>
        <div className='flex flex-col md:flex-row pt-6'>
          <div className='px-5'>
            <h2 className='text-3xl mt-2'>Events</h2>
            <p className='text-left pt-2'>I have worked on organizing 70+ different events, with varying sizes of 10-500 participants and different settings.
            My strengths lie in ground-level organization and structuring, including recruitment, task assigning and project development.</p>
            <p className='text-left pt-2'>Most of my experience lies in organizing various over-the-weekend community-based events such as LARPs, or Live Action RolePlays, which have required an average of 6-12 months of work as a whole.
            Most commonly I have done project management, but other roles, such as budget managing, audio technician and stage managing are familiar as well</p>
          </div>
          <div className='px-5'>
            <h2 className='text-3xl mt-2'>Associations</h2>
            <p className='text-left pt-2'>I have been a part of several associations, often as part of my spare-time activities. I have long-term experience on organizing and running an 
            association, from budgeting and bureaucratic management to annual event planning and marketing.</p>
            <p className='text-left pt-2'>I have acted as a secretary, a treasurer and a chairman. Furthermore, on both associations and different projects, I have experience on working as communications & HR correspondent.</p>
          </div>
        </div>
      </div>
      <div className='md:mx-40 mt-16 flex flex-center flex-col text-center bg-opacity-50 bg-black border-l-2 border-r-2 border-white'>
      <Link href='https://perkunas.yhdistysavain.fi/' className='linkbtn'>Chairman | 30+ events organized at Roolipeliyhdistys Perkunas</Link>
      <Link href='https://boffaus.fi/lajiesittely/' className='linkbtn'>Communications Correspondent at Suomen Pehmomiekkailuliitto</Link>
      <Link href='https://blush.lifebeyond.fi/' className='linkbtn '>Project Manager at "BLUSH 2023" event</Link>
      <Link href='https://kuunsilta.lifebeyond.fi/' className='linkbtn '>Project Manager at "Kuunsilta 2022" event</Link>
      <Link href='https://www.saromusiikki.fi/leirit' className='linkbtn'>Event Producer at SÄRÖ bandcamp 2022</Link>
      <Link href='https://kolomonen.fi/' className='linkbtn'>Project Coordinator at Kolomonen 2019</Link>
      </div>
    </div>
  )
}