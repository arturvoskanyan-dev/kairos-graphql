import { gql } from "@apollo/client";

export const GET_TRENDING_ANIME = gql`
  query GetTrendingAnime {
    Page(perPage: 5) {
      media(type: ANIME, status: RELEASING, sort: [TRENDING_DESC]) {
        id
        title {
          romaji
          english
        }
        description
        duration
        episodes
        favourites
        coverImage {
          large
          extraLarge
        }
        startDate {
          year
          month
          day
        }
      }
    }
  }
`;
