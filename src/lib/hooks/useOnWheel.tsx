import { useEffect } from "react";

export default function useOnScroll(callback: (event?: WheelEvent) => void) {
  useEffect(() => {
    window.addEventListener('wheel', callback);

    return () => window.removeEventListener('wheel', callback);
  },[callback]);
}