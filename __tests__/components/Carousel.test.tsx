import { CarouselPlugin } from "@/components/layout/carousel";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { trendingAnimeMock } from "../mock/animeMocks";
import { beforeEach } from "vitest";

vi.mock("embla-carousel-react", () => {
  return {
    default: vi.fn(() => [
      () => {}, // carouselRef
      {
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
        canScrollPrev: () => true,
        canScrollNext: () => true,
        on: vi.fn(),
        off: vi.fn(),
      },
    ]),
  };
});

describe("Test Carousel Component", () => {
    beforeEach(() => {
        const mediaItems = trendingAnimeMock.result.data.Page.media

        render(
            <CarouselPlugin items={mediaItems} />
        )
    })

    test("carousel component items rendering", async () => {
        // await waitFor(() => {
        //     expect(screen.getByText("Naruto")).toBeInTheDocument();
        // })
        const title = await screen.findByText("Naruto");
        const description = await screen.findByText("A ninja story.");
        const img = await screen.findByAltText(/Naruto Image/i);
        const episodes = await screen.findByText(/EP 220/i);
        // const animeDate = await screen.findByText("")

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(episodes).toBeInTheDocument();
    });
})
