import React from 'react';
import { ArtworkType } from '../data/artworks';
import { Card, Image } from 'antd';
import { StyledCard } from './AccomplishmentCard';
import { StaticImage } from 'gatsby-plugin-image';

const { Meta } = Card;

const Artwork = ({ key, artwork } : { key: any, artwork: ArtworkType}) => {
    const { title, description, image } = artwork
    return (
        <StyledCard
            hoverable
            key={key}
            style={{ width: 400 }}
            cover={image}
        >
        <Meta title={title} description={description ? description : ""} />
    </StyledCard>
    )
}

export default Artwork;