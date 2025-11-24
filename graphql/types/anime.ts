export interface Anime {
    id: number;
    title: {
        romaji: string;
        english?: string | null;
    };
    description?: string | null;
    duration?: number | null;
    episodes?: number | null;
    favourites?: number | null;
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

export interface GenreType {
    id: number;
    coverImage: { large: string }
}

export interface PageMedia<T> {
    Page: {
        media: Array<T>;
    };
}
export type GetTrendingAnimeData = PageMedia<Anime>;
export type GetGenresData = PageMedia<GenreType>;