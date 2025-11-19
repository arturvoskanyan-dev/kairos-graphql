import Description from "@/components/ui/description";
import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Test Description component", () => {
    const text = 'Hello world <br/> this is a <i>test</i> description with many words to check truncation logic';
    beforeEach(() => {
        render(
            <Description description={text} shortLimit={5} expandedLimit={20} />
        )
    })

    test("renders short text and + More button", () => {
        expect(screen.getByText(/Hello.../i)).toBeInTheDocument();
        waitFor(() => {
            expect(screen.getByRole("button", { name: /\+ more/i })).toBeInTheDocument();
        })
    })

    test("expands and collapses text when clicking the button", async () => {
        const button = screen.getByRole("button", { name: /\+ more/i });

        await userEvent.click(button);
        expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /\- less/i})).toBeInTheDocument();
    })
})