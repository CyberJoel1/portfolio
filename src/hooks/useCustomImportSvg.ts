import { useState, useEffect } from 'react';

function useCustomHook(nameSvg = 'home-question.svg') {
    const [impSVG, setImpSVG] = useState<string | null>(null);

    useEffect(() => {
      const loadSVG = async () => {
        try {
          const importedSVG = await import(`../assets/icons/${nameSvg}.svg`);
          setImpSVG(importedSVG);
        } catch (error) {
          console.error('Error loading SVG:', error);
        }
      };
  
      loadSVG();
    }, [nameSvg]);

  return {
    importedSvg : impSVG,
  };
}

export default useCustomHook;