import React from 'react';
import { PublicationType } from "../data/publications";
import { Card, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const PublicationCard = ({ key, publication }: { key: any, publication: PublicationType }) => {
    return (
        <Card key={key} style={{ width: '100%' }}>
            <Text strong>{publication.title}
                {publication.url && <a href={publication.url} target="_blank" rel="noreferrer noopener">
                    <FileTextOutlined style={{marginLeft: '0.5rem'}}/>
                </a>}
            </Text>
            <Paragraph>
                {publication.authors.join(", ")}
                <br/>
                <Text italic>{publication.conference}</Text>
                
                {publication.award && <>
                    <br/>
                    <Text type="success">⟡ {publication.award}</Text>
                </>}
            </Paragraph>
        </Card>
    )
}

export default PublicationCard;