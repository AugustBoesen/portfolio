import {Header, Hero, Info} from "@/components"
import {earthbg1} from "@/img"
import Image from "next/image"

export default function Home() {
  return (
    <div className="m-0 w-full flex justify-center flex-col">
    <Image src={earthbg1} alt="topbg" className="z-[-1] fixed w-full opacity-80 top-1/4"/>
    <Header/>
    <Hero/>
    <Info/>
    </div>

  )
}
