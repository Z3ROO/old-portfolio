import { useEffect, useState } from "react";

type ScreenSizeType = 'xs'|'sm'|'mg'|'lg'|'xl'|'2xl';

export default function useScreenSize(initialValue:ScreenSizeType) {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>(initialValue);
  
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 640)
        setScreenSize('xs');
      else if (window.innerWidth < 768)
        setScreenSize('sm');
      else if (window.innerWidth < 1024)
        setScreenSize('mg');
      else if (window.innerWidth < 1280)
        setScreenSize('lg');
      else if (window.innerWidth < 1536)
        setScreenSize('xl');
      else if (window.innerWidth >= 1536)
        setScreenSize('2xl');
    }
    handler();
    
    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  },[])

  return screenSize
}