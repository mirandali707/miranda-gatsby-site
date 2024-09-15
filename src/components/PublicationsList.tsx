import React from 'react';
import PublicationCard from './PublicationCard';
import { publications } from '../data/publications';

const PublicationsList = () => {
    return (
        <>
            {publications.map((publication, idx) => {
                return <PublicationCard key={idx} publication={publication} />
            })}
        </>
    )
}

export default PublicationsList