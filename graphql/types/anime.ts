export interface Anime {
    id: number;
    title: {
        romaji: string;
        english?: string | null;
    };
    description?: string | null;
    duration?: number | null;
    episodes?: number | null;
    coverImage: {
        large: string;
        extraLarge: string;
    };
    startDate: {
        year?: number | null;
        month?: number | null;
        day?: number | null;
    };
}

export interface GetTrendingAnimeData {
    Page: {
        media: Anime[];
    };
}
