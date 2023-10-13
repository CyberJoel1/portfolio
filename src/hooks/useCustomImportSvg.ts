"use client"
import { DESCRIPCION_ICONS } from '@/config/icons/const/descriptionIcons';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import Error from 'next/error';
import { useState, useEffect } from 'react';

function useCustomImportSvg(nameSvg: TypesSvgIcons = TypesSvgIcons.EMPTY) {
  const [impSVG, setImpSVG] = useState<string | null>(null);
  const descriptionSvg = DESCRIPCION_ICONS[nameSvg];
  useEffect(() => {
    if (TypesSvgIcons.EMPTY == nameSvg) return;
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
    importedSvg: impSVG,
    descriptionSvg
  };
}

export default useCustomImportSvg;