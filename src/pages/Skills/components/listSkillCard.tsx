
import React from 'react';
import { SKILL_TEMPLATE_DATA } from '@/pages/Skills/data/SkillTemplatesData';
import SkillCard from './skillCard';
import ListIconsCard from '@/components/listIconsCard';

interface Props {

}

const ListSkillCard: React.FC<Props> = ({ }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6'>
            {
                SKILL_TEMPLATE_DATA.map((cardSkill) => {
                    const { title, description, icons, id } = cardSkill;

                    return (
                        <SkillCard
                            key={id}
                            title={title}
                            description={description}
                        >
                            <div className="grid grid-cols-4 lg:grid-cols-5 mx-auto justify-center ">
                                <ListIconsCard icons={icons} />
                            </div>
                        </SkillCard>
                    );
                })
            }
        </div>
    );
};

export default ListSkillCard;