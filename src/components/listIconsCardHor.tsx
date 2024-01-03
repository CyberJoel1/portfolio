"use client"
import React from 'react';
import Image from 'next/image';
import { createContainerBoxIcon } from '@/utils/createContainerBoxIcon';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface Props {
    icons: TypesSvgIcons[];
    link: string[];
}

const ListIconsCardHor: React.FC<Props> = ({ icons, link }) => {


    const containerBoxIcon: BoxIcon[] = createContainerBoxIcon(icons);
    return (
        containerBoxIcon.map((boxIcon) => {
            const { image, textDescription } = boxIcon;
            return (
                <Link href={link[0]} target="_blank" key={textDescription}>
                    <div key={textDescription}
                        className="flex flex-row p-2 justify-items-end cursor-pointer rounded-lg text-red-600">
                        {image?<Image
                            src={image || ''}
                            alt="Logo"
                            sizes="50vw"
                            width={500}
                            height={300}
                            className="justify-self-end "
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100vh',
                                width: '27px',
                                height: 'auto',
                                margin: 'auto',
                                paddingRight: '6px'                            
                            }}
                        />:null}
                        <p className="text-center text-base text-gray-600 justify-start">{textDescription}</p>
                    </div>
                </Link>
            )
        })
    );
};

export default ListIconsCardHor;