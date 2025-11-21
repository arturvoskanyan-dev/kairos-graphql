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
import Description from "../../ui/description";

export function CarouselPlugin({ items = [] }: { items?: Array<Anime> }) {
    return (
        <Carousel className="w-full max-w-full">
            <CarouselPrevious className="w-12 h-12 absolute left-4 z-50" />
            <CarouselContent>
                {items?.map((anime) => (
                    <CarouselItem key={anime.id}>
                        <div className="relative">
                            <Image src={anime.coverImage.extraLarge} alt={`${anime.title.romaji} Image`} width={900} height={655} className="bg-black opacity-30 w-full h-[655px] object-cover rounded-xl" />
                            <div className="absolute top-1/3 left-18 z-10 flex flex-col gap-6">
                                <h3 className="text-white font-medium">
                                    Home | TV
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-4xl text-white font-bold">{anime.title.romaji}</h3>
                                    {anime.episodes && <p className="text-base text-gray-300">
                                        EP {anime.episodes} - {anime.duration}m
                                    </p>}
                                    {anime.description &&
                                        <Description description={anime.description} shortLimit={70} expandedLimit={90} />
                                    }
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="w-12 h-12 absolute right-4 z-50" />
        </Carousel>
    );
}
