"use client";

import { GET_TRENDING_ANIME } from '@/graphql/queries';
import { GetTrendingAnimeData } from '@/graphql/types/anime';
import { useQuery } from '@apollo/client/react'
import React from 'react'
import { CarouselPlugin } from '../carousel';
import Trending from '../trending';

export default function Hero() {
    const { loading, data, error } = useQuery<GetTrendingAnimeData>(GET_TRENDING_ANIME);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    // console.log(data);
    

    return (
        // <div>index</div>
        <div className='flex justify-between gap-12 w-full'>
            <CarouselPlugin items={data?.Page.media} />
            <Trending items={data?.Page.media} />
        </div>
    )
}
