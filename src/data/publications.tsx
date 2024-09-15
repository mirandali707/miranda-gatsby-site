export type PublicationType= {
    title: React.ReactNode | string,
    authors: string[],
    conference: string,
    image?: React.ReactNode,
    url?: string,
    award?: string,
} 

export const publications = [
    {
        "title": "Assessing Political Bias using Crowdsourced Pairwise Comparisons",
        "authors": ["Miranda Li", "Tzu-Sheng Kuo", "Mcardle Hankin", "Andrew Ying", "Cathy Wang"],
        "conference": "The 8th AAAI Conference on Human Computation and Crowdsourcing (HCOMP 2020)",
        "award": "Best Work-in-Progress Award",
    }
]