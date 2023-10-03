import React, { FC, JSXElementConstructor, ReactElement, ReactNode, ReactText } from 'react';
import { TemplateCardWork } from '../models/TemplateCardWork';

import {
    Card, CardContent, CardDescription,
    CardFooter, CardHeader, CardTitle
}
    from '@/components/ui/card';
import ListIconsCardHor from '@/components/listIconsCardHor';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';

interface Props {
    title: string;
    description: string;
    children: ReactNode;
    linkGithub: string;
    linkProject?: string;
}


const CardWork: React.FC<Props> = ({ title, description, children, linkGithub, linkProject}) => {
    return (
        <Card className="h-full rounded bg-slate-300">
            <CardHeader>
                <CardTitle className='!text-xl'>Proyecto: {title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="flex justify-between">
                   <ListIconsCardHor icons={[TypesSvgIcons.GITHUB_ICON]} link={[linkGithub]}/>
            </CardFooter>
        </Card>
    );
};

export default CardWork;