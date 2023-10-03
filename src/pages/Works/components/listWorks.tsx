import React from 'react';
import { WORKS_DATA } from '../data/WorksData';
import CardWork from './cardWork';
import Image from 'next/image';
import FunctionalitiesWork from './functionalitiesWork';
import ListIconsCard from '@/components/listIconsCard';
import SeparatorComponent from '@/components/separator';
import { TemplateCardWork } from '../models/TemplateCardWork';
interface Props {

}

const ListWorks: React.FC<Props> = ({ }) => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 auto-rows-max '>
            {WORKS_DATA.map((work: TemplateCardWork) => {
                const { id, image, functionalities, tools, title, description, linkGithub, link } = work;
                return (
                    <CardWork title={title} description={description} key={id}  
                    linkGithub={linkGithub} linkProject={link}
                    >
                        <Image
                            src={image || ''}
                            alt="Logo"
                            sizes="50vw"
                            width={500}
                            height={300}
                            className="rounded w-full h-40 bg-blue-500 hover:transform 
                            hover:scale-110 hover:transition-transform hover:duration-300"
                        />
                        <FunctionalitiesWork functionalities={functionalities} />
                        <SeparatorComponent />
                        <div className='grid grid-cols-4 md:grid-cols-5 mt-9'>
                            <ListIconsCard icons={tools} />
                        </div>
                    </CardWork >
                )
            })}
        </div>
    );
};

export default ListWorks;