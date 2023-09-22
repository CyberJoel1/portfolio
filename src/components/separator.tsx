"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import useCustomHook from '@/hooks/useCustomImportSvg';


interface Props {
  svgName: string;
}

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100vh',
  width: '40px',
  height: 'auto',
};

const SeparatorComponent: React.FC<Props> = ({ svgName }) => {
    const { importedSvg } = useCustomHook(svgName);

  return (
    <div className="flex items-center">
      <div className="border-t border-gray-300 flex-grow"></div>
      <div className="mx-2">
        {importedSvg ? (
          <Image
            src={importedSvg}
            alt="Logo"
            sizes="50vw"
            width={500}
            height={300}
            className=""
            style={imageStyle}
          />
        ) : (
          <div className="mt-5"></div>
        )}
      </div>
      <div className="border-t border-gray-300 flex-grow"></div>
    </div>
  );
};

export default SeparatorComponent;
