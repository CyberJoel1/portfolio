import { useEffect, useRef } from "react";
// @ts-ignore
import Typed from 'typed.js'

function useClickCounter(writers: String[]) {
    const typedTextRef = useRef(null);

    useEffect(() => {
        const options = {
          strings: writers,
          typeSpeed: 30, 
    
        };
        const typed = new Typed(typedTextRef.current, options);
        return () => {
          typed.destroy(); 
        };
      }, []);

  return { typedTextRef };
}

export default useClickCounter;