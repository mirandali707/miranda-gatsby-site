import React, { useState } from 'react';
import { ConfigProvider, Card, Avatar, Tag, Tooltip, Button, Modal } from 'antd';
import { mirandaConfig } from '../styles/mirandaConfig';
import { GatsbyImage } from "gatsby-plugin-image"

export const AccomplishmentCard = ({
    title, 
    description, 
    start,
    end,
    tags,
    role,
    image,
    avatar,
    moreInfo
} : {
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
) => {
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => { setModalOpen(true) }
    const hideModal = () => { setModalOpen(false) }
    const cardText = (
    <>
        <p style={{color: '#444444'}}>{role}</p>
        <p style={end.toLowerCase() === 'present' ? {color:'#558564'} : {color:'#8377D1'}}>{start} → {end}</p>
        <p>{description}</p>
    </>
    )

    return (
        <ConfigProvider theme={mirandaConfig}>
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={image ? image : <></>}
        >
            <Card.Grid hoverable={false} style={{ width: '100%' }}>
            <Card.Meta 
                avatar={avatar ? 
                <Avatar icon={avatar} /> : <></>}
                title={title} 
                description={cardText} 
            />
            </Card.Grid>
            {moreInfo ? 
            <>
                <Card.Grid hoverable={false} style={{width:'60%'}}>
                    {
                        tags.map((tag) => {
                            return <AccomplishmentTag category={tag}/>
                        })
                    }
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:'40%'}}>
                    <Button onClick={showModal}>See more</Button>
                </Card.Grid>
            </>
             : 
             <>
                <Card.Grid hoverable={false} style={{width:'100%'}}>
                    {
                        tags.map((tag) => {
                            return <AccomplishmentTag category={tag}/>
                        })
                    }
                </Card.Grid>
             </>}
            
        </Card>
        
        <Modal 
        visible={modalOpen} 
        footer={null} 
        closable={true} 
        maskClosable={true}
        onCancel={hideModal}
        >
            {moreInfo}
        </Modal>

        </ConfigProvider>
    )
}

enum tagColors {
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

enum tagText {
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

const AccomplishmentTag = ({category}) => {
    return (
    <Tooltip placement="top" title={tagText[category]}>
        <Tag color={tagColors[category]}>{category}</Tag>
    </Tooltip>)
}