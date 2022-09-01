import Header from "./Header";
import { DesignThinkingIcon, HackerIcon, JsLogo } from "../lib/icons";
import useOnWheel from "../lib/hooks/useOnWheel";
import { useContext, useEffect, useRef, useState } from "react";
import { ControllerContext } from "../App";
import {Wave} from "@z3ro/synthwave";


export default function GreetingSection() {
  const controller = useContext(ControllerContext);
  const GreetingSectionRef = useRef<any>(null);
  const [greetingOn, setGreetingOn] = useState<boolean>(true);
  const synthCanvasRef = useRef<HTMLCanvasElement|null>(null);

  useOnWheel((event) => {
    console.log(event!.deltaY, window.scrollY)
    if (controller.scrollLock)
      return

    if (window.scrollY === 0 && event!.deltaY < 0) {
      document.querySelector('body')!.style.overflow = 'hidden';
      GreetingSectionRef.current.style.height = '100vh';
      setGreetingOn(true)
    }
    else if (window.scrollY === 0 && event!.deltaY > 0) {
      GreetingSectionRef.current.style.height = '0px';
      setGreetingOn(false)
      setTimeout(() => {
        document.querySelector('body')!.style.overflow = 'auto';
      }, 150)
    }
  })

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
  }, [greetingOn])
  //refatorar
  const iconsClassName = `
    inline fill-red-400 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-xl transition
    xl:w-12 xl:my-4 xl:mx-10 
    2xl:w-16 2xl:my-4 2xl:mx-20 
  `

  return (
    <div
      className="z-10 w-full h-screen absolute dark:bg-gray-800 bg-white transition-all duration-300 overflow-hidden" 
      ref={GreetingSectionRef}
    >
      {/* <div className="aaaa w-full h-full z-4 absolute">
        
        
      </div> */}
      <div className="z-5 flex xl:m-16 2xl:m-40">
        <Header />          
        <div className="xl:ml-0 xl:mt-20 2xl:ml-12 2xl:mt-40">
          <DesignThinkingIcon className={iconsClassName} />
          <JsLogo className={iconsClassName} />
          <HackerIcon className={iconsClassName} />
        </div>
      </div>  
      {greetingOn && <canvas id="synth-wave-canvas" className="w-full h-[70vh] absolute -bottom-12" ref={synthCanvasRef}></canvas>}
    </div>          
  )
}
