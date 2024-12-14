import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export type ArtworkType = {
    title: React.ReactNode | string,
    description?: React.ReactNode | string,
    image: React.ReactNode
}

export const artworks : ArtworkType[] = [
    {
        title: 'Lepus californicus',
        description: "~4' x 4'; acrylic & gesso on hardboard + plywood, hardware. Commission for Frost Arts and Music Festival in 2023.",
        image: <StaticImage
            src="../images/art/bunny_1.jpeg"
            alt="Stanford logo"
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'Apex predator',
        description: '8" x 11", scratchboard.',
        image: <StaticImage
            src="../images/art/apexpredator.jpeg"
            alt="Stanford logo"
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'Cerberusoju, Guardian of the Enchanted Broccoli Forest',
        description: "2' x 3', acrylic & acrylic gloss on canvas.",
        image: <StaticImage
            src="../images/art/soju.jpeg"
            alt="Stanford logo"
            placeholder="blurred"
            layout="constrained"
        />
    },
]
