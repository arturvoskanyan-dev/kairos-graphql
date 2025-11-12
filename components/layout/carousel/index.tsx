"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Anime } from "@/graphql/types/anime";
import Image from "next/image";

export function CarouselPlugin({ items }: { items: Array<Anime> | undefined }) {
    return (
        <Carousel className="w-full max-w-5xl">
            <CarouselContent>
                {items?.map((anime) => (
                    <CarouselItem key={anime.id}>
                        <div className="p-2">
                            <Image src={anime.coverImage.extraLarge} alt={`${anime.title.romaji} Image`} width={800} height={420} className="w-[800px] h-[420px] object-cover rounded-md" />
                            <h3 className="mt-2 text-white font-bold">{anime.title.romaji}</h3>
                            {anime.episodes && <p className="text-sm text-gray-300">{anime.episodes} EP</p>}
                            <p>{anime.description}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
