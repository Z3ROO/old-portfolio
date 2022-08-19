import { createContext, useEffect, useRef, useState } from "react";
import GreetingSection from "./components/GreetingSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function Controller() {
  const scrollLock = useRef<boolean>(false);

  return {
    scrollLock: scrollLock.current
  }
}

export const ControllerContext = createContext<any>(null);

function App() {
  const controller = Controller();
  const element = useRef<any>(null);

  useEffect(() => {
    //document.querySelector('body')!.style.overflow = 'hidden'
    if (localStorage.getItem('colorMode') === 'dark') {
      document.querySelector('html')!.classList.add('dark');
    }
  },[]);

  return (
    <div className="w-full dark:bg-gray-800 dark:text-white">
      <ControllerContext.Provider value={controller} >
        <GreetingSection />
        <div className="flex">
          <div className="w-1/12">

          </div>
          <div className="w-11/12 pr-16">
            <Projects />
            <Skills />
            <div className="h-96">
            </div>
          </div>
        </div>
      </ControllerContext.Provider>
    </div>
  );
}

export default App;
