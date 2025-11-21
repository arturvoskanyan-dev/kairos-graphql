"use client";

import { GET_GENRES } from '@/graphql/queries';
import client from '@/lib/apolloClient';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export type GenreType = {
    id: number;
    coverImage: { large: string };
}

type GetGenresData = {
    Page: {
        media: Array<GenreType>
    }
}

export default function Genres() {
    const genres = ["Action", "Comedy", "Horror"];
    const [data, setData] = useState<Record<string, Array<GenreType>>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGenres() {
            setLoading(true);
            const results = await Promise.all(
                genres.map(async (g) => {
                    const res = await client.query<GetGenresData>({
                        query: GET_GENRES,
                        variables: { genre: [g] },
                    });
                    return { genre: g, items: res.data?.Page.media || [] };
                })
            );

            const finalData: Record<string, Array<GenreType>> = {};
            results.forEach(r => {
                finalData[r.genre] = r.items;
            });

            setData(finalData);
            setLoading(false);
        }

        fetchGenres();
    }, []);

    if (loading) return <p>Loading...</p>;

    console.log(data);

    return (
        <div className="flex gap-6">
            {genres.map((g) => (
                <div key={g} className="bg-zinc-900 max-w-[540px] h-80 w-full rounded-xl">

                    <div className='flex flex-col items-center justify-between h-full'>
                        <h2 className="text-white text-xl font-medium mb-4 p-4">{g}</h2>

                        <div className="flex gap-2">
                            {data[g]?.map((anime) => (
                                <div
                                    key={anime.id}
                                    className="p-0 rounded"
                                >
                                    <Image
                                        src={anime.coverImage.large}
                                        alt={anime.id.toString()}
                                        width={150}
                                        height={200}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
