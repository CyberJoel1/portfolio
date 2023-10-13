import SeparatorComponent from '@/components/separator';
import { ConfigFonts } from '@/config/fonts/const/ConfigFonts';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import React from 'react';
import ListWorks from './components/listWorks';

interface Props {
  classNames: string;
}
const { sizeTitles } = ConfigFonts;

const Works: React.FC<Props> = ({ classNames }) => {
  return (
    <div className={`${classNames}`}>
      <div className='my-5 relative'>
        <div className='relative z-[1] bg-slate-300 rounded'>
          <div className="pt-8 font-medium ">
            <h2 className={`text-center text-[${sizeTitles}] z-1`}>WORKS</h2>
            <SeparatorComponent svgName={TypesSvgIcons.ADMIN_ICON} />
          </div>
       
        <ListWorks/>
        
        </div>
        <div className="absolute h-full w-full -left-8 -top-7 bg-red-800 opacity-80 rounded shadow-[0px_55px_60px_55px_rgba(0,0,0,0)]"></div>
      </div>
    </div>
  );
};

export default Works;