'use client'
import React from 'react';
import Image from 'next/image';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import { createContainerBoxIcon } from '@/utils/createContainerBoxIcon';

interface Props {
    icons: TypesSvgIcons[];
}

const ListIconsCard: React.FC<Props> = ({ icons }) => {

    const containerBoxIcon: BoxIcon[] = createContainerBoxIcon(icons);
    return (
        containerBoxIcon.map((boxIcon) => {
            const { image, textDescription } = boxIcon;
            return (
                <div key={textDescription} className="grid grid-rows-2">
                    <Image
                        src={image || ''}
                        alt="Logo"
                        sizes="50vw"
                        width={500}
                        height={300}
                        className=""
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100vh',
                            width: '25px',
                            height: 'auto',
                            margin: 'auto'
                        }}
                    />
                    <p className="text-center text-xs text-muted-foreground">{textDescription}</p>
                </div>
            )
        })
    );
};

export default ListIconsCard;