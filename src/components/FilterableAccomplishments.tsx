import React from 'react';
import { Space, Row, Col } from 'antd';
import { AccomplishmentCard } from './AccomplishmentCard';
import { accomplishments, AccomplishmentType } from '../data/accomplishments';

export const FilterableAccomplishments = ( { activeTags }) => {
    const columns : AccomplishmentType[][] = [[], [], []];  // 3 columns

  // Sort achievements into columns
    accomplishments.forEach((accomplishment, index) => {
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
