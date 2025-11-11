"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Anime } from "@/graphql/types/anime";

export function CarouselPlugin({ items }: { items: Array<Anime> | undefined }) {
    return (
        <Carousel className="w-full max-w-5xl">
            <CarouselContent>
                {items?.map((anime) => (
                    <CarouselItem key={anime.id}>
                        <div className="p-2">
                            <img src={anime.coverImage.extraLarge} alt={anime.title.romaji} className="w-[800px] h-[420px] object-cover rounded-md" />
                            <h3 className="mt-2 text-white font-bold">{anime.title.romaji}</h3>
                            {anime.episodes && <p className="text-sm text-gray-300">{anime.episodes} episodes</p>}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
