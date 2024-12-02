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
        "title": "Fostering And Understanding Diverse Interpersonal Connections in a Massive Online CS1 Course",
        "authors": ["Miranda Li", "Ali Malik", "Chris Piech"],
        "conference": "The 56th ACM Technical Symposium on Computer Science Education (SIGCSE 2025)",
        "url": "connections_SIGCSE25.pdf"
    },
    {
        "title": "Bug or artistic feature? Scaling assessment and feedback of creative student-authored graphics programs",
        "authors": ["Miranda Li", "Cameron Mohne", "Chris Piech"],
        "conference": "CS229: Machine Learning (fall 2023)",
        "url": "CS_229_Final_Report.pdf",
        "award": "Best Project Award"
    },
    {
        "title": "Assessing Political Bias using Crowdsourced Pairwise Comparisons",
        "authors": ["Miranda Li", "Tzu-Sheng Kuo", "Mcardle Hankin", "Andrew Ying", "Cathy Wang"],
        "conference": "The 8th AAAI Conference on Human Computation and Crowdsourcing (HCOMP 2020)",
        "award": "Best Work-in-Progress Award",
        "url": "https://www.humancomputation.com/2020/assets/2020/wip_demos/HCOMP_2020_paper_80.pdf"
    }
]