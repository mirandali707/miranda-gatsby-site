import React from 'react';
import Artwork from './Artwork';
import { artworks } from '../data/artworks';
import '../styles/index.css'

const ArtworksList = () => {
    return (
        <div className="artworks-list">
            {artworks.map((artwork, idx) => {
                return <Artwork key={idx} artwork={artwork} />
            })}
        </div>
    )
}

export default ArtworksList