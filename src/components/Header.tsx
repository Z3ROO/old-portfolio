import { useEffect, useRef } from 'react';
import devicesIcon from '../devices-icon.svg';
import { DevicesScreen } from '../lib/icons';
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
      fourth.style.transform = 'translateX(84px)';
      fifth.style.transform = 'translateX(-45px)';

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
  
  return  <header>
            <section className="p-8 pt-14 pb-20 poppins">
              <h1 className="text-9xl align-top m-0 p-0">
                Pe
                <span ref={thirdLetter} className="transition inline-block">d</span>
                <span ref={fourthLetter} className="transition inline-block">r</span>
                <span ref={fifthLetter} className="transition inline-block">o</span>
              </h1>
              <div className="flex">
                <h2 className="text-5xl align-top m-0 p-0 text-red-400">Front-end Developer</h2>
                <DevicesScreen className="w-10 mt-auto ml-4 fill-red-400"/>
              </div>
            </section>
            <section className="absolute right-2 top-2">
              <button className='btn border-red-400 '>Contato</button>
              <button className='icon border-red-400 group dark:bg-white' onClick={darkMode} >
                <img src={moonIcon} alt='Night mode' className='w-6 dark:hidden' />
                <img src={sunIcon} alt='Day mode' className='w-6 hidden dark:inline'/>
              </button>
            </section>
          </header>
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