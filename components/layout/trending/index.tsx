import { Anime } from '@/graphql/types/anime'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Trending({items = []}: {items?: Array<Anime>}) {
    return (
        <div className='max-w-[540px] w-full bg-neutral-900 flex flex-col gap-5 py-10 px-8 rounded-xl'>
            {
                items.map((anime, i) => (
                    <div className='flex items-center gap-4' key={anime.id}>
                        <h3 className='text-xl text-white font-medium'>0{i + 1}</h3>
                        <Image src={anime?.coverImage.large} alt='Anime Image' width={70} height={90} className='rounded-md object-contain' />
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-xl text-white font-medium'>{anime.title.english}</h2>
                            <p className='flex gap-2 text-white'>
                                <Heart className='cursor-pointer' /> 
                                {anime.favourites}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
