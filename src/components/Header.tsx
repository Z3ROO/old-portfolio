import { useEffect, useRef } from 'react';
import devicesIcon from '../devices-icon.svg';
import { DevicesScreen, MoonIcon, SunIcon } from '../lib/icons';
import moonIcon from '../moon.png';
import sunIcon from '../sun.png';

export default function Header() {
  const thirdLetter = useRef<HTMLSpanElement>(null);
  const fourthLetter = useRef<HTMLSpanElement>(null);
  const fifthLetter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let odd = true;
    
    const third = thirdLetter.current;
    const fourth = fourthLetter.current;
    const fifth = fifthLetter.current;

    if (!third || !fourth || !fifth)
      throw new Error('Ref not set');

    const apply = () => {
      //fourth.style.transform = 'translateX(84px)';
      fourth.style.transform = 'translateX(0.6em)';
      //fifth.style.transform = 'translateX(-45px)';
      fifth.style.transform = 'translateX(-0.38em)';

      fifth.style.transformOrigin = 'top';
      third.style.transformOrigin = 'top';
      
      setTimeout(() => {
        third.style.transform = 'rotateX(90deg)';
        
        third.textContent = 't';
        fifth.textContent = 'e';
        setTimeout(() => {
          third.style.transform = 'rotateX(0deg)';
        }, 100);
      }, 75);
    }

    const reset = () => {
      fourth.style.transform = 'translateX(0)'
      fifth.style.transform = 'translateX(0)'

      setTimeout(() => {
        third.style.transform = 'rotateX(90deg)'
        
        third.textContent = 'd';
        fifth.textContent = 'o';
        setTimeout(() => {
          third.style.transform = 'rotateX(0deg)'
        }, 100);
      }, 75);
    }

    const handler = () => {

      if (odd)
        apply()
      else
        reset()
      
      odd = !odd;
    }
    const interval = setInterval(handler, 5000);

    return () => clearInterval(interval);
  },[])
  
  return  <section>
            <div className="p-8 pt-14 pb-20 poppins">
              <h1 className={`
                align-top m-0 p-0 select-none
                xl:text-[112px] 
                2xl:text-[128px]  
                `}>
                Pe
                <span ref={thirdLetter} className="transition-transform inline-block">d</span>
                <span ref={fourthLetter} className="transition-transform inline-block">r</span>
                <span ref={fifthLetter} className="transition-transform inline-block">o</span>
              </h1>
              <div className="flex select-none -mt-4">
                <h2 className="xl:text-3xl 2xl:text-5xl align-top m-0 p-0 text-red-400">Front-end Developer</h2>
                <DevicesScreen className="xl:w-8 2xl:w-10 mt-auto ml-4 fill-red-400"/>
              </div>
            </div>
            <div className="absolute right-6 top-6">
              {/* <button className='btn border-red-400 '>Contato</button> */}
              <div className='group cursor-pointer' onClick={darkMode} >
                <MoonIcon className='w-7 hidden dark:inline moon-dance fill-white'/>
                <SunIcon className='w-7 dark:hidden sun-dance'/>
              </div>
            </div>
          </section>
}

function darkMode() {
  const htmlNode = document.querySelector('html');

  if (htmlNode!.classList.contains('dark')){
    htmlNode!.classList.remove('dark')
    localStorage.setItem('colorMode', 'light')
  }
  else {
    htmlNode!.classList.add('dark')
    localStorage.setItem('colorMode', 'dark')
  }
}