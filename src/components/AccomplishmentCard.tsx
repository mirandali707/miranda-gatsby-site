import React, { useState } from 'react';
import { ConfigProvider, Card, Avatar, Tag, Tooltip, Button, Modal } from 'antd';
import { mirandaConfig } from '../styles/mirandaConfig';
import { tagText, tagColors } from "./tagProperties"

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

const AccomplishmentTag = ({category}) => {
    return (
    <Tooltip placement="top" title={tagText[category]}>
        <Tag color={tagColors[category]}>{category}</Tag>
    </Tooltip>)
}