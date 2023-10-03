import React from 'react';
import SeparatorComponent from '@/components/separator';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import ListSkillCard from './components/listSkillCard';
import { ConfigFonts } from '@/config/fonts/const/ConfigFonts';

interface Props {
    classNames: string;
}

const { sizeTitles } = ConfigFonts;

const Skills: React.FC<Props> = ({ classNames }) => {
    return (
        <div className={`${classNames}`}>
            <div className="pt-8 font-medium ">
                <h2 className={`text-center text-[${sizeTitles}]`}>SKILLS</h2>
                <SeparatorComponent svgName={TypesSvgIcons.ADMIN_ICON} />
            </div>
            <ListSkillCard/>
        </div>
    );

};

export default Skills;