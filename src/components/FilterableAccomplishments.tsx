import React from 'react';
import { Space, Row, Col } from 'antd';
import { AccomplishmentCard } from './AccomplishmentCard';
import { accomplishments, AccomplishmentType } from '../data/accomplishments';

export const FilterableAccomplishments = ( { activeTags, anyOrAll }) => {
    const columns : AccomplishmentType[][] = [[], [], []];  // 3 columns
    const _ = require('lodash')

    const anyOverlap = (arrA, arrB) => {
        // if the intersection between the two arrays' elements is empty, they do NOT have any overlap,
        // so we return NOT (the intersection between these two arrays' elements is empty)
        return !_.isEmpty(_.intersection(arrA, arrB))
    }

    const allOverlap = (arrA, arrB) => {
        // if all of the elements in arrA and arrB overlap, then their XOR is the empty set
        return _.isEmpty(_.xor(arrA, arrB))
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

// const hasIntersection = (arrA: string[], arrB : string[]) => {
//     const a = new Set(arrA)
//     const b = new Set(arrB)
//     let a_intersect_b = new Set([...a].filter(x => b.has(x))); 
//     return a_intersect_b.size !== 0
// }