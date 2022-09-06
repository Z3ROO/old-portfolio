import { createContext, useEffect } from "react";
import GreetingSection from "./components/greeting/GreetingSection";
import MinorProjects from "./components/projects/MinorProjects";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

interface IGlobalController{
}

function GlobalController(): IGlobalController {
  return {

  }
}

export const GlobalControllerContext = createContext<IGlobalController|null>(null);

function App(): JSX.Element {
  const controller = GlobalController();

  useEffect(() => {
    if (localStorage.getItem('colorMode') === 'dark') {
      document.querySelector('html')!.classList.add('dark');
    }
  },[]);

  return (
    <div className={`w-full overflow-x-hidden dark:bg-gray-800 dark:text-white`}>
      <GlobalControllerContext.Provider value={controller} >
        <GreetingSection />
        <div className="flex justify-center">
          <div className={`
            w-2/12 hidden
            sm:block
            xl:w-1/12
          `}>
          </div>
          <div className={`
            max-w-[1440px] w-full px-4
            sm:w-10/12
            xl:11/12
          `}>
            <Projects />
            <MinorProjects />
            <Skills />
            <div className={`h-96`}>
            </div>
          </div>
        </div>
      </GlobalControllerContext.Provider>
    </div>
  );
}

export default App;
