import { createContext, useEffect } from "react";
import GreetingSection from "./components/GreetingSection";
import MinorProjects from "./components/MinorProjects";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function Controller() {

  return {
    
  }
}

export const ControllerContext = createContext<any>(null);

function App() {
  const controller = Controller();

  useEffect(() => {
    if (localStorage.getItem('colorMode') === 'dark') {
      document.querySelector('html')!.classList.add('dark');
    }
  },[]);

  return (
    <div className="w-full dark:bg-gray-800 dark:text-white">
      <ControllerContext.Provider value={controller} >
        <GreetingSection />
        <div className="flex">
          <div className="w-1/12 2xl:w-2/12">

          </div>
          <div className="w-11/12 pr-16 max-w-[1440px] 2xl:10/12 2xl:pl-2 2xl:pr-14">
            <Projects />
            <MinorProjects />
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
