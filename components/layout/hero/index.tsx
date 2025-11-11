"use client";

import { GET_TRENDING_ANIME } from '@/graphql/queries';
import { GetTrendingAnimeData } from '@/graphql/types/anime';
import { useQuery } from '@apollo/client/react'
import React from 'react'
import { CarouselPlugin } from '../carousel';

export default function Hero() {
    const { loading, data, error } = useQuery<GetTrendingAnimeData>(GET_TRENDING_ANIME);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    console.log(data);
    

    return (
        // <div>index</div>
        <CarouselPlugin items={data?.Page.media} />
    )
}

