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
            alt="A hanging painted bunny in a grove."
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'Apex predator',
        description: '8" x 11", scratchboard.',
        image: <StaticImage
            src="../images/art/apexpredator.jpeg"
            alt="A scratchboard with many subjects, including a baby riding a fish, Pokemon, a woman in a tiger's mouth, and people standing on a giant turtle."
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'Cerberusoju, Guardian of the Enchanted Broccoli Forest',
        description: "2' x 3', acrylic & acrylic gloss on canvas.",
        image: <StaticImage
            src="../images/art/soju.jpeg"
            alt="A painting of a three-headed French bulldog in a forest."
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'Haircut',
        description: 'Marker and pen in a 2022 sketchbook.',
        image: <StaticImage
            src="../images/art/haircut.jpeg"
            alt="A sketch of a person getting a haircut in pen and marker."
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'Untitled',
        description: "Oil on canvas, after a photo by Bruce Gilden.",
        image: <StaticImage
            src="../images/art/bruce.png"
            alt="A painting of a woman's face, making a pained expression."
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: 'STATS 315B',
        description: "Graphite on paper, from screenshots of a Zoom class. Pictured is Prof. Jerome Friedman.",
        image: <StaticImage
            src="../images/art/stats315b.jpeg"
            alt="A pencil drawing in a sketchbook. The upper panel has hands drawing a diagram. The lower panel shows a man adjusting a paper beneath a projector."
            placeholder="blurred"
            layout="constrained"
        />
    },

]
