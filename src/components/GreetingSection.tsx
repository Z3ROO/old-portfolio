import Signature from "./Signature";
import { DesignThinkingIcon, HackerIcon, JsLogo } from "../lib/icons";
import useOnWheel from "../lib/hooks/useOnWheel";
import { useEffect, useRef, useState } from "react";
import {Wave} from "@z3ro/synthwave";
import { MoonIcon, SunIcon } from '../lib/icons';


export default function GreetingSection(): JSX.Element {
  const GreetingSectionRef = useRef<HTMLDivElement|null>(null);
  const [greetingOn, setGreetingOn] = useState<boolean>(true);
  const synthCanvasRef = useRef<HTMLCanvasElement|null>(null);

  useOnWheel((event) => {
    if (GreetingSectionRef.current == null)
      throw new Error('Greeting section ref not correctly loaded.');

    const scrollUpWhenOnTop = window.scrollY === 0 && event!.deltaY < 0;
    const scrollDownWhenOnTop = window.scrollY === 0 && event!.deltaY > 0;

    if (scrollUpWhenOnTop) {
      document.querySelector('body')!.style.overflow = 'hidden';
      GreetingSectionRef.current.style.height = '100vh';
      setGreetingOn(true);
    }
    else if (scrollDownWhenOnTop) {
      GreetingSectionRef.current.style.height = '0px';
      setGreetingOn(false);
      setTimeout(() => {
        document.querySelector('body')!.style.overflow = 'auto';
      }, 150);
    }
  });

  useEffect(() => {
    if (!greetingOn)
      return
    
    const canvasRef = synthCanvasRef.current;
    if (canvasRef == null)
      throw new Error();
    
    const wave = new Wave(canvasRef, {
      canvasWidth: canvasRef.offsetWidth,
      canvasHeight: canvasRef.offsetHeight,
      xDots: 72,
      yDots: 40,
      color: '#f87171',
      horizonAngle: .2,
      centerPosition: .3,
      waveDelay: 4,
      hollowDots: 3,
      wavePattern: 'inside-out',
      waveMaxHeight: 50,
      frameQtd:60
    });
    wave.init();
  }, [greetingOn]);
  

  const greetingPageSkillIconsClassName = `
    inline fill-red-400 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-xl transition
    xl:w-12 xl:my-4 xl:mx-10 
    2xl:w-16 2xl:my-4 2xl:mx-20
  `;

  return (
    <div
      className="z-10 w-full h-screen absolute dark:bg-gray-800 bg-white transition-all duration-300 overflow-hidden" 
      ref={GreetingSectionRef}
    >
      <div className={`
        z-5 flex 
        xl:m-16 
        2xl:m-40
      `}>
        <Signature />
        <div className={`
          xl:ml-0 xl:mt-20 
          2xl:ml-12 2xl:mt-40
        `}>
          <DesignThinkingIcon className={greetingPageSkillIconsClassName} />
          <JsLogo className={greetingPageSkillIconsClassName} />
          <HackerIcon className={greetingPageSkillIconsClassName} />
        </div>
      </div>  
      <DarkModeButton />
      {greetingOn && <canvas id="synth-wave-canvas" className="w-full h-[70vh] absolute -bottom-12" ref={synthCanvasRef}></canvas>}
    </div>          
  )
}


function DarkModeButton(): JSX.Element {
  return (
    <div className="absolute right-6 top-6">
      <div className='group cursor-pointer' onClick={cacheDarkMode} >
        <MoonIcon className='w-7 hidden dark:inline moon-dance fill-white'/>
        <SunIcon className='w-7 dark:hidden sun-dance'/>
      </div>
    </div>
  )
}

function cacheDarkMode(): void {
  const htmlNode = document.querySelector('html');

  if (htmlNode!.classList.contains('dark')){
    htmlNode!.classList.remove('dark');
    localStorage.setItem('colorMode', 'light');
  }
  else {
    htmlNode!.classList.add('dark');
    localStorage.setItem('colorMode', 'dark');
  }
}