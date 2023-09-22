"use client"
import React from 'react';
import useCustomTyped from "@/hooks/useCustomTyped";
import { anton } from '../utils/getFontAnton'

type Color = "negro" | "blanco";

const colorMapping: Record<Color, string> = {
    negro: "text-black",
    blanco: "text-red",
};

interface Props {
    classNames?: string;
    text: string;
    textColor: Color;
}

/**
 * Función que devuelve la clase CSS para un color dado.
 * @param {Color} textColor - El color para el que se quiere obtener la clase CSS.
 * @returns {React.FC<Props>} La clase CSS correspondiente al color.
 */
const TextWriterHeader: React.FC<Props> = ({ classNames, textColor, text }) => {
    const { typedTextRef } = useCustomTyped([text]);
    return (
        <div className={`${classNames}`}>
            <div className={`${colorMapping[textColor]}`}>
                <h1 className={`${anton.className} text-[3vw] text-justify p-16 animate-text bg-gradient-to-r from-red-700 via-red-700 to-white bg-clip-text text-transparent text-5xl font-black animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in`}>
                    <span ref={typedTextRef}></span>
                </h1>
            </div>
        </div>
    );
};

export default TextWriterHeader;