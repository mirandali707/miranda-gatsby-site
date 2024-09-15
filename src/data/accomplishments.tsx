import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import CIPContent from "./cip.mdx"
import CS198Content from "./cs198.mdx"
// import GreenEyes from "./green_eyes.mdx"
// import Magdalene from "./magdalene.mdx"

export type AccomplishmentType = {
    title: React.ReactNode | string,
    description: React.ReactNode | string,
    start: string,
    end: string,
    tags: string[],
    role?: string,
    image?: React.ReactNode,
    avatar?: React.ReactNode,
    moreInfo?: React.ReactNode,
} 

export const accomplishments : AccomplishmentType[] = [
    {
        title: <a href="https://codeinplace.stanford.edu/">Code in Place</a>,
        role: 'Course Admin, Director of Head TAs, Developer... and more!',
        description: "Code in Place is a free, human-centered offering of the first half of CS106A, Stanford's intro Python course, which has served around 30k students worldwide. Please 'See more', as I've done a lot of work for this course!",
        start: 'March 2020 → May 2020, March 2021',
        end: 'Present',
        tags: ['cs-ed', 'code', 'teaching', 'design', 'work', 'leadership'],
        avatar:<StaticImage
                    src="../images/cip-logo.png"
                    alt="Stanford logo"
                    placeholder="blurred"
                    layout="constrained"
                />,
        moreInfo: <CIPContent/>
    },
    {
        title: <a href='https://www.9dots.org/'>9 Dots</a>,
        role: 'Learning designer',
        description: "Designed lesson plans for game-based learning and professional development resources for public school teachers at Title 1 elementary schools in LA County, serving 300+ teachers at 24+ partner schools, reaching 8,000+ students. Developed teacher training curriculum to support teachers in teaching CS without prior CS experience.",
        start: 'June 2022',
        end: 'September 2023',
        tags: ['cs-ed', 'teaching', 'design', 'work'],
        avatar:<StaticImage
                    src="../images/9+Dots+logo+no+text.png"
                    alt="9 colorful dots"
                    placeholder="blurred"
                    layout="constrained"
                />,
    },
    {
        title: <a href='https://cs198.stanford.edu/cs198/'>Stanford Computer Science</a>,
        role: 'Section Leader',
        description: "Led Stanford students in weekly discussion sections for Stanford’s Programming Methodologies course; worked closely with faculty to ensure course accessibility for visually impaired students; wrote a tool to support student learning of image processing techniques.",
        start: 'Winter 2020',
        end: 'Winter 2021',
        tags: ['cs-ed', 'teaching', 'work'],
        avatar:<StaticImage
                    src="../images/Block_S_2_color.png"
                    alt="Stanford S with tree"
                    placeholder="blurred"
                    layout="constrained"
                />,
        moreInfo: <CS198Content/>
    },
    {
        title: <a href='https://mirandali707.github.io/nonsense_newspapers/'>Nonsense Newspapers</a>,
        description: "Trained a GAN to generate realistic-looking but meaningless newspaper images as an artistic work intended to invoke a sense of simultaneous familiarity and foreignness, and made a physical zine.",
        start: 'September 2020',
        end: 'December 2020',
        tags: ['art', 'ai'],
        image: <StaticImage
            src="../images/5_gen_96.jpg"
            alt="An AI-generated newspaper, vaguely spooky looking, with columns and headlines that are all nonsense."
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: <a href='https://law.stanford.edu/education/only-at-sls/law-policy-lab/practicums-2022-2023/governance-and-regulation-of-emerging-technologies-809a/'>Policy Lab</a>,
        role: 'Contributor',
        description: "Authored 27 page report (available on request) on the impact of generative AI on education for Stanford Law School Policy Lab on Governance and Regulation of Emerging Technologies. The report will be synthesized with other reports to inform policy recommendations regarding generative AI.",
        start: 'March 2023',
        end: 'June 2023',
        tags: ['cs-ed','ai'],
        avatar: <StaticImage
            src="../images/Block_S_2_color.png"
            alt="Stanford S with tree"
            placeholder="blurred"
            layout="constrained"
        />
    },
    {
        title: <a href='https://morphogen.io/'>Morphogen</a>,
        role: 'Machine Learning Intern',
        description: "Aided in upcoming redesign of Artbreeder, an in-browser GAN application, by producing machine learning pipeline for visualizing and summarizing latent space of trained image models",
        start: 'June 2021',
        end: 'September 2021',
        tags: ['ai', 'code', 'art', 'work'],
        avatar:<StaticImage
            src="../images/artbreeder-logo.png"
            alt="Artbreeder logo"
            placeholder="blurred"
            layout="constrained"
        />,
    },
    {
        title: <a href='https://www.teus.media/'>Teus Media</a>,
        role: 'ML Research and Development',
        description: "Employed deep learning methods to build voice conversion / anonymization pipeline for protection of at-risk subjects in documentary films",
        start: 'January 2021',
        end: 'March 2021',
        tags: ['ai', 'code', 'work'],
    },
    {
        title: <a href='https://rashaadnewsome.com/'>Rashaad Newsome Studio</a>,
        role: 'AI Research and Development',
        description: "Used text generation models in novel pipeline for poetry generation which incorporates human feedback, in collaboration with poets Dazié Grego and Alok Vaid-Menon",
        start: 'March 2021',
        end: 'August 2021',
        tags: ['ai', 'art', 'work'],
    },
    {
        title: 'Knowhere News',
        role: 'Software Engineering Intern',
        description: "Built, trained, and tuned models to predict the intuitive newsworthiness of event clusters and tips, using non-text and text features extracted from event cluster / tip metadata; built web service to integrate newsworthiness models into pipeline and deployed both models into production to streamline content management system for more efficient, unbiased story selection; created responsible data visualizations for an editorial project on COVID-19 statistics",
        start: 'June 2020',
        end: 'August 2020',
        tags: ['journo', 'ai', 'code', 'work'],
    },
    {
        title: 'Stanford Daily',
        role: 'Graphics Managing Editor',
        image:<StaticImage
            src="../images/daily-mags.png"
            alt="Three Stanford Daily magazine covers in a row. The leftmost is dark, with numbers 5150 over a collage of images with the caption, 'Where do Stanford students go after they've attempted suicide?'. The middle, titled 'The Health Edition', has an image of a classroom with empty chairs and desks, with the handwritten caption, 'You can never level the playing field.' The rightmost is very colorful and has the word 'PRIDE' in large white letters with playful accents."
            placeholder="blurred"
            layout="constrained"
        />,
        avatar:<StaticImage
            src="../images/stanford-daily.png"
            alt="Stanford Daily logo, a dark red S in calligraphic font"
            placeholder="blurred"
            layout="constrained"
        />,
        description: <p>Directed 10 graphic artists in producing three 36-page magazines for print publication: <a href='(https://issuu.com/stanforddailymagazine/docs/mag_4_issuu2'>Issue 4</a>, <a href='https://issuu.com/stanforddailymagazine/docs/mag_5_issuu'>Issue 5</a>, and <a href='https://drive.google.com/file/d/1uuyYQ8CWSB_WdbEP0ALFJ46pzHeepPBX/view?usp=sharing'>Issue 6</a>. Oversaw deadlines and printing process; coordinated communication between managing editors and staffers.</p>,
        start: 'November 2018',
        end: 'June 2019',
        tags: ['journo', 'art', 'design', 'leadership'],
    },
    // TODO: images in .mdx files don't work for some reason...
    // {
    //     title: 'Magdalene',
    //     description: "Graphite on paper + Procreate animation + frame interpolation",
    //     start: '??',
    //     end: '2020',
    //     tags: ['art', 'ai'],
    //     image: <StaticImage
    //         src="../images/magdalene.png"
    //         alt="A graphite drawing of Mary Magdalene, a woman who is reclining holding a cross and looking upwards."
    //         placeholder="blurred"
    //         layout="constrained"
    //     />,
    //     moreInfo: <Magdalene/>
    // },
]