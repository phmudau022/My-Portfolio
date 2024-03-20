import Image from 'next/image'
import React from 'react'

export const LanguageItem = (props: LanguageItemProps) => {

    const {title, image} = props
  return (
    <div className='w-full flex items-center gap-2'>
        <Image 
            alt='language icon'
            src={image}
            width={400}
            height={400}
            className='w-6 h-6 rounded-sm object-cover'
        />
        <span className='text-ls font-semibold'>{title}</span>
    </div>
  )
}

type LanguageItemProps = {
    title: string,
    image: any
}

