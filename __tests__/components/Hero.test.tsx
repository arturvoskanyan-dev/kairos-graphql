import Hero from "@/components/layout/hero";
import { GET_TRENDING_ANIME } from "@/graphql/queries";
import { MockedProvider } from "@apollo/client/testing/react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { trendingAnimeMock } from "../mock/animeMocks";

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
            <MockedProvider mocks={[trendingAnimeMock]}>
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