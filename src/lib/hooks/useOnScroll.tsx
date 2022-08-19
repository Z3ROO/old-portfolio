import { useEffect } from "react";

export default function useOnScroll(callback: (event?: Event) => void) {
  useEffect(() => {
    window.addEventListener('scroll', callback);

    return () => window.removeEventListener('scroll', callback);
  },[callback]);
}