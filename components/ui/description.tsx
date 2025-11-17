"use client";

import React, { useState } from 'react'

type DescriptionType = {
    description: string,
    shortLimit: number,
    expandedLimit: number,
}

export default function Description({ description, shortLimit, expandedLimit }: DescriptionType) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const cleanDescription = description
        ?.replace(/<br\s*\/?>/gi, " ")
        .replace(/<\/?i>/gi, "")
        .replace(/\n/g, " ");

    const words = cleanDescription.split(" ");
    const shortText =
        words.length > shortLimit ? words.slice(0, shortLimit).join(" ") + "..." : cleanDescription;

    const expandedText =
        words.length > expandedLimit ? words.slice(0, expandedLimit).join(" ") + "..." : cleanDescription;

    return (
        <>
            <p className="text-white font-medium max-w-[500px]">
                {expanded ? expandedText : shortText}

                {words.length > shortLimit && (
                    <button
                        className="text-white font-bold pl-2 hover:underline"
                        onClick={() => setExpanded((prev) => !prev)}
                    >
                        {expanded ? "- Less" : "+ More"}
                    </button>
                )}
            </p>
        </>
    );
}
