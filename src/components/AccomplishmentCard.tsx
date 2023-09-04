import React, { useState } from 'react';
import { Card, Avatar, Tag, Tooltip, Button, Modal } from 'antd';
import {  tagProperties } from "../data/tagProperties"
import { AccomplishmentType } from '../data/accomplishments';

export const AccomplishmentCard = ({ accomplishment } : { accomplishment: AccomplishmentType }) => {
    const { title, description, start, end, tags, role, image, avatar, moreInfo } = accomplishment
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => { setModalOpen(true) }
    const hideModal = () => { setModalOpen(false) }
    const cardText = (
    <>
        <p style={{color: '#444444'}}>{role}</p>
        <p style={end.toLowerCase() === 'present' ? {color:'#558564'} : {color:'#8377D1'}}>{start} → {end}</p>
        {typeof(description) === 'string' ? <p>{description}</p> : description}
    </>
    )

    return (<>
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
                        tags.map((tag, tagIdx) => {
                            return <AccomplishmentTag key={tagIdx} category={tag}/>
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
                        tags.map((tag, tagIdx) => {
                            return <AccomplishmentTag key={tagIdx} category={tag}/>
                        })
                    }
                </Card.Grid>
             </>}
            
        </Card>
        
        <Modal 
        open={modalOpen} 
        footer={null} 
        closable={true} 
        maskClosable={true}
        onCancel={hideModal}
        >
            {moreInfo}
        </Modal>
        </>
    )
}

const AccomplishmentTag = ({ category } : { category : string}) => {
    return (
    <Tooltip placement="top" title={tagProperties[category].text}>
        <Tag color={tagProperties[category].color}>{category}</Tag>
    </Tooltip>)
}