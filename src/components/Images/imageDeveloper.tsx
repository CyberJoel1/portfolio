import React from 'react';
import Image from 'next/image'
interface Props {
    classNames?: string
}

const ImageDeveloper: React.FC<Props> = ({ classNames }) => {
    return (
        <div className={`${classNames} relative`}>
            <Image
                src="/profile/profileJoel.jpg"
                alt="Logo"
                sizes="50vw"
                width={500}
                height={300}
                className='h-[250px] md:h-full w-full'
                // className="md:h-[80vh] lg:h-[80vh] h-[40vh] w-full"
            />
            <div className="absolute inset-0 bg-red-800 opacity-90"></div>
        </div>
    );
};

export default ImageDeveloper;