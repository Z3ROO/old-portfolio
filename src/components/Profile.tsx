import { useRef } from 'react'
import satoro from '../satoro.png'
import useOnScroll from '../lib/hooks/useOnScroll';

export default function Profile() {
  const profilePictureRef = useRef<HTMLImageElement>(null);

  // useOnScroll((event)=> {
  //   if (!profilePictureRef.current)
  //     throw new Error('picture reference not set')
    
  //   const profilePicture = profilePictureRef.current;
  //   const profilePictureSize = 500;
  //   const parentWrapperContainer = document.querySelector('#header-projects-area') as any;

  //   if (window.scrollY > (parentWrapperContainer.offsetHeight - profilePictureSize - 80)) {
  //     profilePicture.style.position = 'absolute';
  //     profilePicture.style.bottom = '0';
  //     profilePicture.style.top = 'auto';
  //   }
  //   else if (window.scrollY < 640) {
  //     profilePicture.style.position = 'fixed';
  //     profilePicture.style.top = window.scrollY/8+16+'px';
  //     profilePicture.style.bottom = 'auto';
  //   }
  //   else {
  //     profilePicture.style.position = 'fixed';
  //     profilePicture.style.top = '96px';
  //     profilePicture.style.bottom = 'auto';
  //   }
  // })

  return  <div className="h-full flex justify-center items-center px-16">
            <img ref={profilePictureRef} src={satoro} alt='' className='' />
          </div>
}