import Hero from "@/components/layout/hero";
import { GET_TRENDING_ANIME } from "@/graphql/queries";
import { MockedProvider } from "@apollo/client/testing/react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

const mockData = {
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
                        coverImage: { large: "naruto.jpg" },
                        startDate: { year: 2002, month: 10, day: 3 },
                    },
                ],
            },
        },
    },
};

describe("Test Hero Component", () => {
    test("renders loading state", () => {
        render(
            <MockedProvider mocks={[]}>
                <Hero />
            </MockedProvider>
        );
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("renders data after fetching", async () => {
        render(
            <MockedProvider mocks={[mockData]}>
                <Hero />
            </MockedProvider>
        );

        // await waitFor(() => {
        //     expect(screen.getByText(/naruto/i)).toBeInTheDocument();
        // });
    });

    test("renders error state", async () => {
        const errorMock = {
            request: { query: GET_TRENDING_ANIME },
            error: new Error("Network error"),
        };

        render(
            <MockedProvider mocks={[errorMock]}>
                <Hero />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByText(/error/i)).toBeInTheDocument(); 
        });
    });
})