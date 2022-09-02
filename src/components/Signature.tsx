import { useEffect, useRef } from 'react';
import { DevicesScreen } from '../lib/icons';

export default function Signature(): JSX.Element {
  
  return  <section>
            <div className="p-8 pt-14 pb-20 poppins">
              <Name />
              <div className="flex select-none -mt-4">
                <h2 className="xl:text-3xl 2xl:text-5xl align-top m-0 p-0 text-red-400">Front-end Developer</h2>
                <DevicesScreen className="xl:w-8 2xl:w-10 mt-auto ml-4 fill-red-400"/>
              </div>
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
      align-top m-0 p-0 select-none
      xl:text-[112px] 
      2xl:text-[128px]  
    `}>
      Pe
      <span ref={thirdLetter} className={nameAnimatedLettersClassName}>d</span>
      <span ref={fourthLetter} className={nameAnimatedLettersClassName}>r</span>
      <span ref={fifthLetter} className={nameAnimatedLettersClassName}>o</span>
    </h1>
  )
}
