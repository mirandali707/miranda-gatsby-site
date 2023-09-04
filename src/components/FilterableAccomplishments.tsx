import React from 'react';
import { Space, Row, Col } from 'antd';
import { AccomplishmentCard } from './AccomplishmentCard';
import { accomplishments, AccomplishmentType } from '../data/accomplishments';

export const FilterableAccomplishments = ( { activeTags, anyOrAll }) => {
    const columns : AccomplishmentType[][] = [[], [], []];  // 3 columns
    const _ = require('lodash')

    const anyOverlap = (accomplishmentTags, activeTags) => {
        // returns true if any of the active tags are present in the accomplishment's tags
        return !_.isEmpty(_.intersection(accomplishmentTags, activeTags))
    }

    const allOverlap = (accomplishmentTags, activeTags) => {
        // returns true if all active tags are present in the accomplishment's tags
        return (_.intersection(accomplishmentTags, activeTags)).length == activeTags.length
    }


  // Sort achievements into columns
    const filteredAccomplishments = anyOrAll == 'any' ? (
        accomplishments.filter(
            accomplishment => anyOverlap(accomplishment.tags, activeTags)
        )
    ) : (
        accomplishments.filter(
            accomplishment => allOverlap(accomplishment.tags, activeTags)
        )
    )
    
    filteredAccomplishments.forEach((accomplishment, index) => {
        const columnIndex = index % 3;  // Get the column index (0, 1, or 2)
        columns[columnIndex].push(accomplishment);  // Push to the appropriate column
    });

    return (
    <>
    <Row align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    {columns.map(( column, columnIdx ) => {
        return (

            <Col key={columnIdx} span={8} >
                <Space direction="vertical" size="large" style={{width:'100%'}}>
                    {column.map((accomplishment, accomplishmentIdx) => {
                        return (
                            <AccomplishmentCard key={accomplishmentIdx} accomplishment={accomplishment}/>
                        )
                    })}
                </Space>
            </Col>
        )}
        )}
    </Row>
    </>      
    )
}