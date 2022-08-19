import Header from "./Header";
import Profile from "./Profile";
import { DesignThinkingIcon, HackerIcon, HTMLLogo, JsLogo, ReactLogo, SEOIcon } from "../lib/icons";
import useOnWheel from "../lib/hooks/useOnWheel";
import { useContext, useEffect, useRef, useState } from "react";
import { ControllerContext } from "../App";

export default function GreetingSection() {
  const controller = useContext(ControllerContext);
  const GreetingSectionRef = useRef<any>(null)

  useOnWheel((event) => {
    console.log(event!.deltaY, window.scrollY)
    if (controller.scrollLock)
      return

    if (window.scrollY === 0 && event!.deltaY < 0) {
      document.querySelector('body')!.style.overflow = 'hidden';
      GreetingSectionRef.current.style.height = '100vh';
    }
    else if (window.scrollY === 0 && event!.deltaY > 0) {
      GreetingSectionRef.current.style.height = '0px';
      setTimeout(() => {
        document.querySelector('body')!.style.overflow = 'auto';
      }, 150)
    }
  })

  return (
    <div
      className="z-10 w-full h-screen flex absolute dark:bg-gray-800 bg-white transition-all duration-300 overflow-hidden" 
      ref={GreetingSectionRef}
    >
      <Profile />
      <div className="">
        <Header />          
        <div className="m-8">
          <DesignThinkingIcon className='inline w-16 my-4 mx-12 fill-red-500 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-xl transition' />
          <JsLogo className='inline w-16 my-4 mx-12 fill-red-500 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-xl transition' />
          <HackerIcon className='inline w-16 my-4 mx-12 fill-red-500 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-xl transition' />
        </div>
      </div>
    </div>          
  )
}