import { describe, expect, test } from "vitest";
import {render, screen} from "@testing-library/react"
import Header from "@/components/layout/header";

describe("Test Header Component", () => {
    test("renders the logo and navigation links", () => {
        render(<Header />);

        // Logo
        expect(screen.getByText("Kairos")).toBeInTheDocument();
    
        // Nav Links
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Anime List")).toBeInTheDocument();
        // // expect(screen.getByText(""))

        // // Search: Input
        expect(screen.getByPlaceholderText("Search anime...")).toBeInTheDocument();
    })
})