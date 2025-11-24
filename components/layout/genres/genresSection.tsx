"use client";

import { GET_GENRES } from "@/graphql/queries";
import { GetGenresData } from "@/graphql/types/anime";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";

export default function GenreSection({ genre }: { genre: string }) {
    const { data, loading, error } = useQuery<GetGenresData>(GET_GENRES, {
        variables: { genre: [genre] },
    });

    if (loading) return <p>Loading...</p>;
    
    return (
        <div className="bg-zinc-900 max-w-[540px] h-80 w-full rounded-xl p-4">
            <div className='flex flex-col items-center justify-between h-full'>
                <h2 className="text-white text-xl font-medium mb-4">{genre}</h2>
                <div className="flex gap-2 flex-1 items-end">
                    {data?.Page.media.map((anime) => (
                        <Image
                            key={anime.id}
                            src={anime?.coverImage?.large || ""}
                            alt={`Image ${anime?.id}`}
                            width={120}
                            height={160}
                            className="rounded object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}