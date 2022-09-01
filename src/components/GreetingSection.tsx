import Signature from "./Signature";
import { DesignThinkingIcon, HackerIcon, JsLogo } from "../lib/icons";
import useOnWheel from "../lib/hooks/useOnWheel";
import { useEffect, useRef, useState } from "react";
import {Wave} from "@z3ro/synthwave";


export default function GreetingSection() {
  const GreetingSectionRef = useRef<any>(null);
  const [greetingOn, setGreetingOn] = useState<boolean>(true);
  const synthCanvasRef = useRef<HTMLCanvasElement|null>(null);

  useOnWheel((event) => {
    const scrollUpWhenOnTop = window.scrollY === 0 && event!.deltaY < 0;
    const scrollDownWhenOnTop = window.scrollY === 0 && event!.deltaY > 0;

    if (scrollUpWhenOnTop) {
      document.querySelector('body')!.style.overflow = 'hidden';
      GreetingSectionRef.current.style.height = '100vh';
      setGreetingOn(true)
    }
    else if (scrollDownWhenOnTop) {
      GreetingSectionRef.current.style.height = '0px';
      setGreetingOn(false)
      setTimeout(() => {
        document.querySelector('body')!.style.overflow = 'auto';
      }, 150);
    }
  });

  useEffect(() => {
    if (!greetingOn)
      return
    
    const canvasRef = synthCanvasRef.current;
    if (canvasRef === null)
      throw new Error()
    
    const wave = new Wave(canvasRef, {
      canvasWidth: canvasRef.offsetWidth,
      canvasHeight: canvasRef.offsetHeight,
      xDots: 72,
      yDots: 68,
      color: '#f87171',
      horizonAngle: .2,
      centerPosition: .2,
      waveDelay: 4,
      hollowDots: 3,
      wavePattern: 'outside-in'
    })
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
      <div className="z-5 flex xl:m-16 2xl:m-40">
        <Signature />          
        <div className="xl:ml-0 xl:mt-20 2xl:ml-12 2xl:mt-40">
          <DesignThinkingIcon className={greetingPageSkillIconsClassName} />
          <JsLogo className={greetingPageSkillIconsClassName} />
          <HackerIcon className={greetingPageSkillIconsClassName} />
        </div>
      </div>  
      {greetingOn && <canvas id="synth-wave-canvas" className="w-full h-[70vh] absolute -bottom-12" ref={synthCanvasRef}></canvas>}
    </div>          
  )
}
