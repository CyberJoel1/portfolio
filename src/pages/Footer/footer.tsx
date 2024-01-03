import ListIconsCardHor from '@/components/listIconsCardHor';
import { TypesSvgIcons } from '@/config/icons/enums/typesSvgIcons';
import Link from 'next/link';
import React, { SVGProps } from 'react';

interface Props {
  classNames: string;
}

const LINK_LINKEDIN = 'https://www.linkedin.com/in/joel-velasco-b531b6148/';

export function LogosLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <Link href={LINK_LINKEDIN} className='mx-auto'>
      <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="2em" viewBox="0 0 512 128" {...props}><path fill="#FFFFFF" d="m202.057 74.971l28.252 34.743H208l-25.143-31.908v31.908h-18.286V18.286h18.286v53.76l23.223-26.332h23.314l-27.337 29.257Zm-73.143-31.085a24.777 24.777 0 0 0-20.205 10.971v-9.143h-17.28v64h18.285V79.817a15.909 15.909 0 0 1 15.177-17.646c10.606 0 12.252 10.423 12.252 17.646v29.897h18.286v-33.92c0-20.114-6.675-31.908-26.149-31.908h-.366Zm163.657 35.291c.07 1.34.07 2.683 0 4.023h-48v.64a16.366 16.366 0 0 0 16.732 13.074a22.949 22.949 0 0 0 16.823-6.308l12.16 9.143a39.406 39.406 0 0 1-29.715 11.794a31.909 31.909 0 0 1-33.828-34.286a32.731 32.731 0 0 1 34.377-33.371c17.189 0 31.451 12.16 31.451 35.291Zm-17.005-7.863a13.349 13.349 0 0 0-14.537-12.8c-8.04-.869-15.321 4.794-16.458 12.8h30.995ZM18.286 18.286H0v91.428h54.857V91.43H18.286V18.286Zm329.143 0h18.285v91.428h-17.28v-6.4a22.309 22.309 0 0 1-18.285 8.229a31.177 31.177 0 0 1-30.263-33.829a30.72 30.72 0 0 1 30.171-33.828a23.954 23.954 0 0 1 17.372 6.4v-32Zm1.371 59.428A14.903 14.903 0 0 0 333.989 60.8c-8.747.635-15.375 8.157-14.903 16.914c-.472 8.757 6.156 16.28 14.903 16.915A14.903 14.903 0 0 0 348.8 77.714ZM73.143 16.457A11.611 11.611 0 0 0 61.714 27.43c0 6.311 5.117 11.428 11.429 11.428S84.57 33.74 84.57 27.43a11.611 11.611 0 0 0-11.428-10.972ZM64 109.714h18.286v-64H64v64ZM512 9.143v109.714a9.143 9.143 0 0 1-9.143 9.143H393.143a9.143 9.143 0 0 1-9.143-9.143V9.143A9.143 9.143 0 0 1 393.143 0h109.714A9.143 9.143 0 0 1 512 9.143Zm-91.429 36.571h-18.285v64h18.285v-64Zm2.286-18.285c0-6.312-5.117-11.429-11.428-11.429C405.117 16 400 21.117 400 27.429c0 6.311 5.117 11.428 11.429 11.428c6.311 0 11.428-5.117 11.428-11.428Zm70.857 48.365c0-20.114-6.674-31.908-26.148-31.908a24.777 24.777 0 0 0-20.572 10.971v-9.143h-17.28v64H448V79.817a15.909 15.909 0 0 1 15.177-17.646c10.606 0 12.252 10.423 12.252 17.646v29.897h18.285v-33.92Z" /></svg>
    </Link>
  )
}

const Footer: React.FC<Props> = ({ classNames }) => {
  return (
    <div className={`${classNames}`}>
      <div className='grid grid-cols-2 gap-1'>
        <div className='flex align-middle px-7 py-3 justify-center'>
            <ul>
              <li>
                <p className='text-white'>Accede a mi linkedin : </p>
              </li>
              <li className='w-full flex justify-center'>
                <div className='hover:bg-slate-600 px-2 py-1 rounded-md'>
                  <LogosLinkedin />
                </div>
              </li>
            </ul>
        </div>


        <div className=' '>
          <ul>
            <li>
              <p className='text-white uppercase pb-2'>outstanding skills : </p>
            </li>
            <li>
              <p className='text-white pl-3'>+1 year experience JAVA and Spring Boot </p>
            </li>
            <li>
              <p className='text-white pl-3'>Good team works</p>
            </li>

          </ul>
        </div>


      </div>
      <h1 className='text-white text-center p-3 pb-10'>&copy; Desarrollado por <b> Joel Velasco</b></h1>
    </div>
  );
};

export default Footer;