import React from 'react';
import { Card, CardContent, CardDescription, 
        CardFooter, CardHeader, CardTitle } 
from '@/components/ui/card';

interface Props {
    title: string;
    description: string;
    children: React.ReactNode;
}

const SkillCard: React.FC<Props> = ({ title, description, children}) => {

    return (
        <Card className="h-full rounded bg-slate-300">
            <CardHeader>
                <CardTitle className='!text-xl'>{title}</CardTitle>
                <CardDescription>{description} </CardDescription>
            </CardHeader>
            <CardContent>
                
                    {children}
              
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    );
};

export default SkillCard;