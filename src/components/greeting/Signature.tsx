import { useEffect, useRef } from 'react';
import { DevicesScreen } from '../../lib/icons';

export default function Signature(): JSX.Element {
  
  return  <section className="poppins">
              <Name />
              <div className="flex select-none">
                <h2 className={`
                  align-top m-0 p-0 text-red-400 whitespace-pre-wrap
                  text-[24px] inline
                  sm:text-[28px]
                  md:text-[32px]
                  lg:text-[36px]
                  xl:text-[40px]
                  2xl:text-[44px]
                `}>Front-end <br className='sm:hidden' />Developer</h2>
                <DevicesScreen className={`
                  fill-red-400 inline-block
                  w-12 ml-3
                  sm:w-6 sm:ml-4
                  md:w-6
                  lg:w-8
                  xl:w-8 
                  2xl:w-10 
                `}/>
              </div>
          </section>
}

function Name(): JSX.Element {
  const thirdLetter = useRef<HTMLSpanElement>(null);
  const fourthLetter = useRef<HTMLSpanElement>(null);
  const fifthLetter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let odd = true;
    
    const third = thirdLetter.current;
    const fourth = fourthLetter.current;
    const fifth = fifthLetter.current;

    function apply(): void {
      if (!third || !fourth || !fifth)
        throw new Error('Ref not set');

      fourth.style.transform = 'translateX(0.6em)';
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

    function reset(): void {
      if (!third || !fourth || !fifth)
        throw new Error('Ref not set');

      fourth.style.transform = 'translateX(0)';
      fifth.style.transform = 'translateX(0)';

      setTimeout(() => {
        third.style.transform = 'rotateX(90deg)';

        third.textContent = 'd';
        fifth.textContent = 'o';
        setTimeout(() => {
          third.style.transform = 'rotateX(0deg)';
        }, 100);
      }, 75);
    }

    function handler(): void {
      if (odd)
        apply();
      else
        reset();

      odd = !odd;
    }
    const interval = setInterval(handler, 5000);

    return () => clearInterval(interval);
  },[]);

  const nameAnimatedLettersClassName = 'transition-transform inline-block'

  return (
    <h1 className={`
      align-top -mb-[.25em] select-none
      text-[72px]
      sm:text-[88px] 
      md:text-[104px] 
      lg:text-[120px] 
      xl:text-[136px]  
      2xl:text-[152px]  
    `}>
      Pe
      <span ref={thirdLetter} className={nameAnimatedLettersClassName}>d</span>
      <span ref={fourthLetter} className={nameAnimatedLettersClassName}>r</span>
      <span ref={fifthLetter} className={nameAnimatedLettersClassName}>o</span>
    </h1>
  )
}
