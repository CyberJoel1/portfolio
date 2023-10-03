"use client";

import * as React from "react";
import { adaptMenuItems } from './adapters'
import Image from 'next/image'
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useRef } from "react";
import ListItem from '@/pages/NavBar/components/ListItem';
import useModifyChild from "./hooks/useModifyChild";

interface Props {
  classNames: String
}
export function Nav({ classNames }: Props) {

  const navigationMenuRef = React.useRef<HTMLElement | null>(null);
  
  const { state } = useModifyChild(navigationMenuRef);

  return (
    <div className={`grid grid-cols-1 p-1 bg-black lg:grid-cols-[1fr_auto] h-max ${classNames}`}>
      <div className="justify-self-center flex flex-row items-center ml-7 py-1 md:justify-self-start">

        <Image
          src="/logo/logoJoel.png"
          alt="Logo"
          width={200}
          height={250}
          className=""
        />

      </div>
      <NavigationMenu className="mx-auto max-w-none w-full" ref={navigationMenuRef}>

        <NavigationMenuList className="flex-grow flex flex-col md:flex-row" >

          {Object.entries(adaptMenuItems()).map(([key, value]: [string, MenuItem]) => (

            <ListItem
              key={key}
              title={value.title}
              href={value.href}
              className=""
            >
              {value.description}
            </ListItem>
          ))}

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}


export default Nav;
