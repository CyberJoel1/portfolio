import React from 'react';

interface Props {
    functionalities: string[];
}

const FunctionalitiesWork: React.FC<Props> = ({ functionalities }) => {

    return (
        <ul className='text-sm mt-4'>
            {functionalities.map((functionality) => {
                return (
                    <li>* {functionality}</li>
                )
            })}
        </ul>
    );
};

export default FunctionalitiesWork;