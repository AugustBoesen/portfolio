/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {Header} from "@/components"
import {earthbg1} from "@/img"
import Image from "next/image"
import '../styles/globals.css'
import Link from 'next/link'
import Head from "next/head";

export default function music() {
  return (
    <div className="m-0 w-full flex justify-center flex-col">
            <Head>
        <title>Boesen.dev - Music</title>
        <meta
          name="description"
          content="Information about experience regarding music & audio"
        />
      </Head>
    <Image src={earthbg1} alt="topbg" className="z-[-1] fixed w-full opacity-80 top-1/4"/>
    <Header/>
      <div className='mx-6 md:mx-16 mt-16 bg-opacity-50 bg-black'>
      <h1 className='header1'>Music & Audio</h1>
        <div className='flex flex-col md:flex-row pt-6'>
          <div className='px-5'>
              <h2 className='text-3xl mt-2'>Playing & Composition</h2>
              <p className='text-left pt-2'>My main instrument is the piano with 10+ years of practice.
              Alongside that, I also have experience playing drums, violin, tenor sax and electric bass.
              I currently play as a keyboardist/percussionist in a few bands, including the showband "Lyydiset".</p>
              <p className='text-left pt-2'>I have studied composing and have worked on countless compositions and arrangements over the years.
              I've done theatrical, commercial, freelance and fixed productions with 100+ tracks played publicly.
              I've also worked on sheetwriting and have worked on sheets for up to full-scale orchestras and professional choirs.</p>
            </div>
          <div className='px-5'>
              <h2 className='text-3xl mt-2'>Production & Design</h2>
              <p className='text-left pt-2'>I have practiced music production since 2013, first with Logic Pro X and later Ableton permanently.
              I specialize in virtual instrumentation / engineering and electronic sound design.
              My primary focus is consistently creating organic, living soundscapes with both instruments and artificial sound alike.</p>
              <p className='text-left pt-2'>For a long time, I focused on doing game soundtracks, but slowly shifted towards alternatives.
              I have experience mixing studio recordings and live recordings on-set and as post-production.
              Furthermore, I have worked in several productions as a producer for ambient soundscapes, with a focus on horror-themed ambience.</p>
          </div>
        </div>
      </div>
      <div className='md:mx-40 mt-16 flex flex-center flex-col text-center bg-opacity-50 bg-black border-l-2 border-r-2 border-white'>
      <Link href='https://youtu.be/sB6h382N_a8' className='linkbtn'>"Vapauta" Music Video | Solo Project 2020</Link>
      <Link href='https://youtube.com/playlist?list=PLz_U02zhwPBoHkLjGtvRWaE2Aq_CIOZWB' className='linkbtn '>Folk covers of Nintendo OST</Link>
      <Link href='https://open.spotify.com/album/5f1ZgjsnmyZd0Z1PPZavHE?si=nGiZBsktS4OgByNt8W3kGQ' className='linkbtn '>"Among Us" EDM EP </Link>
      <Link href='https://youtu.be/RIZsjKJV7jQ' className='linkbtn'>"Vot I Kaalina" Metal Cover</Link>
      <Link href='https://youtu.be/fsqnk1I7fLw' className='linkbtn'>"Kun Tiden Vil Vise" Classical Composition</Link>
      <Link href='https://youtu.be/Q1OnFasysx8' className='linkbtn'>"Entäs Peltonen" Tribute Acapella Cover</Link>
      <Link href='https://youtu.be/HdVbwLGhV0M' className='linkbtn'>"Cha Cha Cha" Big Band Jazz Cover</Link>
      </div>
    </div>
  )
}