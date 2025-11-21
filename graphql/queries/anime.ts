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

export const GET_GENRES = gql`
  query GetGenres($genre: [String]) {
    Page(page: 1, perPage: 3) {
      media(genre_in: $genre, type: ANIME) {
        id
        coverImage {
          large
        }
      }
    }
  }
`;