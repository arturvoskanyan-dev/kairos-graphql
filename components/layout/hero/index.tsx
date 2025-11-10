"use client";

import { GET_TRENDING_ANIME } from '@/graphql/queries';
import { GetTrendingAnimeData } from '@/graphql/types/anime';
import { useQuery } from '@apollo/client/react'
import React from 'react'

export default function Hero() {
    const {loading, data, error} = useQuery<GetTrendingAnimeData>(GET_TRENDING_ANIME);

    console.log(data);

    return (
        <div>index</div>
    )
}
