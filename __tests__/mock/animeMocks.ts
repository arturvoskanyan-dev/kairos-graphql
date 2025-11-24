import { GET_GENRES, GET_TRENDING_ANIME } from "@/graphql/queries";

export const trendingAnimeMock = {
    request: {
        query: GET_TRENDING_ANIME,
    },
    result: {
        data: {
            Page: {
                media: [
                    {
                        id: 1,
                        title: { romaji: "Naruto", english: "Naruto" },
                        description: "A ninja story.",
                        duration: 24,
                        episodes: 220,
                        favourites: 392,
                        coverImage: { large: "/naruto.jpg", extraLarge: "/naruto-extra-large.png" },
                        startDate: { year: 2002, month: 10, day: 3 },
                    },
                ],
            },
        },
    },
};

export const genreMock = {
    request: {
        query: GET_GENRES,
        variables: {genre: ["Action"]}
    },
    result: {
        data: {
            Page: {
                media: [
                    {
                        id: 1,
                        coverImage: 
                        { 
                            large: "https://example.com/action1.jpg" 
                        }
                    }
                ]
            }
        }
    }
}