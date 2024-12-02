import React from 'react';
import PublicationCard from './PublicationCard';
import { publications } from '../data/publications';
import '../styles/index.css'

const PublicationsList = () => {
    return (
        <div className="publications-list">
            {publications.map((publication, idx) => {
                return <PublicationCard key={idx} publication={publication} />
            })}
        </div>
    )
}

export default PublicationsList