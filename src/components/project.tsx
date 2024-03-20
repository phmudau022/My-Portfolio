import { listPic } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const Project = (props: ProjectProps) => {

    const { title, desc, image } = props;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-96">
            <Image
                alt='project image'
                src={image}
                width={900}
                height={900}
                className='object-cover w-full h-36 mb-4'
            />
            <div className='flex flex-col items-start'>

                <p className="text-lg font-semibold mb-2">{title}</p>
                <p className="text-gray-600 mb-4 text-start">{desc}</p>

                <Link href={"/project"} className='w-fit h-fit self-end'>
                    <button className='bg-black text-white font-semibold text-xs px-4 py-2 rounded-md '>View more</button>
                </Link>
            </div>
        </div>
    )
}

type ProjectProps = {
    title: string,
    desc: string,
    image: any
}