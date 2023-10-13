import { anton } from '../../utils/getFontAnton'
import SeparatorComponent from '@/components/separator';
import { ConfigFonts } from '@/config/fonts/const/ConfigFonts';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import Image from 'next/image';
import React from 'react';
import twitterIcon from "../../assets/Ilustrations/certificate.svg";
import FormContact from './components/form';
import { DAOAccessImpl } from './builder/DaoAccessImpl';


interface Props {
  classNames: string;
}


const { sizeTitles } = ConfigFonts;


const Contact: React.FC<Props> = ({ classNames }) => {
  

  return (
    <div className={`${classNames}`}>
      <div className="pt-8 font-medium">
        <h2 className={`text-center text-[${sizeTitles}]`}>CONTACT</h2>
        <SeparatorComponent svgName={TypesSvgIcons.ADMIN_ICON} />
        <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
          <div className="text-center self-center">
            <div className={`${anton.className} text-xl md:text-[2.4vw] mb-3`}>
              <p>Tengamos una conversación</p>
            
            </div>
            <Image
              src={twitterIcon}
              alt="Logo"
              sizes="50vw"
              width={500}
              height={300}
              className=""
              style={{
                maxWidth: '100%',
                maxHeight: '100vh',
                width: '225px',
                height: 'auto',
                margin: 'auto'
              }}
            />
            <h3 className={`${anton.className} text-xl md:text-[2.4vw] mt-3`}>Contactame</h3>
          </div>

          <FormContact classNames={''} />
          
        </div>
      </div>
    </div>
  );
};

export default Contact;