/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {Header} from "@/components"
import {earthbg1} from "@/img"
import Image from "next/image"
import '../styles/globals.css'
import Head from "next/head";
import Link from 'next/link'

export default function biography() {
  return (
    <div className="m-0 w-full flex justify-center flex-col">
                  <Head>
        <title>Boesen.dev - About</title>
        <meta
          name="description"
          content="Additional information about Severi & contact information"
        />
      </Head>
    <Image src={earthbg1} alt="topbg" className="z-[-1] absolute w-full opacity-80 top-1/4"/>
    <Header/>
      <div className='mx-6 md:mx-16 mt-16 bg-opacity-50 bg-black'>
      <h1 className='header1'>Biography</h1>
        <div className='flex flex-col md:flex-row pt-6'>
          <div className='px-5'>
            <h2 className='text-3xl mt-2'>About me</h2>
            <p className='text-left pt-2'>Outside of work, I have an advanced degree in street dance studies and have continued dancing as a hobby.
            Alongside several sub-genres of street dance and basics in contemporary & ballet, I have also studied capoeira.</p>
            <p  className='text-left pt-2'>I have a passion for all things nerdy, including boffering, minifigure painting and TTRPGs.</p>
            <p className='text-left pt-2'>I have also done video editing and 3D rendering, including solo producing a music video for my instrumental 
            song "vapauta". I have a Filmora license and have used it for video editing.</p>
            <h2 className='text-2xl mt-4'>Website repository</h2>
            <p className='text-left pt-2 mb-2'>You can freely inspect the code behind this website. Everything was made by yours truly for demonstrative purposes.</p>
            <Link href='https://github.com/AugustBoesen/portfolio' className='linkbtn font-bold'>Link to GitHub</Link>
          </div>
          <div className='px-5'>
            <h2 className='text-3xl mt-2'>Contact me</h2>
            <p className='text-left pt-2'>You can send me an email to augustboesen@gmail.com anytime.</p>
            <p className='text-left pt-2'>Generally I am able to begin freelance work with a week's notice and my workflow allows me to execute such orders usually 
            in a 1-5 tracks per day, if need be. Initially I can offer 4-6 hours per week of work towards any project, depending on scale and intensity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}