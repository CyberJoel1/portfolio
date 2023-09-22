import SeparatorComponent from '@/components/separator';
import { TypesSvgIcons } from '@/domain/enums/typesSvgIcons';
import React from 'react';
const {HOME_QUESTION} = require("@/domain/enums/typesSvgIcons").TypesSvgIcons;

interface Props {
    classNames: string;
}
const textoComentario = "Technology professional, oriented to web development. In addition to curious about new technologies that allow him to add value to the project in which he is involved, whether tools, standards and concepts. On the other hand, he considers himself a pleasant person, able to integrate in a professional environment, being able to support and communicate to achieve a goal.";

const AboutMe: React.FC<Props> = ({ classNames }) => {
    return (
        <div className={`${classNames}`}>
            <h2 className="text-center">ABOUT ME</h2>
            <SeparatorComponent svgName={`${HOME_QUESTION}`}/>
            <p className="px-6 pt-8 md:px-[5vw] text-justify">{textoComentario}</p>
        </div>
    );
};

export default AboutMe;