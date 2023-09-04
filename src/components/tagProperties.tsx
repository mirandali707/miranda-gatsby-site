export enum tagColors {
    'cs-ed' = 'cyan',
    'art' = 'volcano',
    'ai' = 'purple',
    'code' = 'blue',
    'pedagogy' = 'gold',
    'design' = 'green',
    'journo' = 'magenta',
    'work' = 'lime',
    'leadership' = 'orange'
}

export const tagInfo = Object.keys(tagColors)
        .map((value)=> {
            return {
                label : value,
                value: tagColors[value]
            }
        })

export enum tagText {
    'cs-ed' = 'CS education (teaching coding)',
    'art' = 'Art!',
    'ai' = 'AI...',
    'code' = 'I coded something',
    'pedagogy' = 'I taught something or thought about teaching',
    'design' = 'I designed something',
    'journo' = 'Journalism :)',
    'work' = 'Internship or job',
    'leadership' = 'I lead a team',
}