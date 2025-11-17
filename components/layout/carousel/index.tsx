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

export function CarouselPlugin({ items }: { items: Array<Anime> | undefined }) {
    return (
        <Carousel className="w-full max-w-3xl">
            <CarouselContent>
                {items?.map((anime) => (
                    <CarouselItem key={anime.id}>
                        <div className="p-2 relative">
                            <Image src={anime.coverImage.extraLarge} alt={`${anime.title.romaji} Image`} width={800} height={480} className="bg-black opacity-30 w-[800px] h-[480px] object-cover rounded-md" />
                            <div className="absolute top-1/3 left-10 z-10 flex flex-col gap-6">
                                <h3 className="text-white font-medium">
                                    Home | TV
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-4xl text-white font-bold">{anime.title.romaji}</h3>
                                    {anime.episodes && <p className="text-base text-gray-300">
                                        EP {anime.episodes} - {anime.duration}m
                                    </p>}
                                    {anime.description &&
                                        <Description description={anime.description} shortLimit={40} expandedLimit={70} />
                                    }
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
