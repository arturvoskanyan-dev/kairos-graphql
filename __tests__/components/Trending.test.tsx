import Trending from "@/components/layout/trending";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { trendingAnimeMock } from "../mock/animeMocks";

describe("Test Trending component", () => {
    beforeEach(() => {
        const animeItems = trendingAnimeMock.result.data.Page.media

        render(
            <Trending items={animeItems} />
        )
    })

    test("trending component items rendering", async () => {
        const title = await screen.findByText("Naruto");
        const img = await screen.findByAltText(/Anime Image/i);
        const favoriteBtn = await screen.findByRole("button", {name: /add to favorites/i});
        const favoriteQuantity = await screen.getByText("392");

        expect(title).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(favoriteBtn).toBeInTheDocument();
        expect(favoriteQuantity).toBeInTheDocument();
        expect(screen.getByText("01")).toBeInTheDocument();
    })
})