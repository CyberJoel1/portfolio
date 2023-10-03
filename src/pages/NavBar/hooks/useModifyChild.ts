import { useEffect } from "react";

function useModifyChild(reference: React.MutableRefObject<HTMLElement | null>) {
    let state = false;

    useEffect(() => {
  
      if (reference.current) {
  
        const firstChild: Element | null | HTMLElement = reference.current.firstElementChild;
  
        if (firstChild) {
          firstChild.setAttribute('style', 'width: 100%');
          firstChild.setAttribute('className', 'w-full');
          state = true;
        }
  
      }
    }, []);

    return (
        {state}
    )
}

export default useModifyChild;