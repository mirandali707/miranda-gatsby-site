import React from 'react';
import { Row, Col, Typography } from 'antd';

const NotFoundPage = () => {
    return (
        <Row justify="center" align="middle" style={{height: '100vh'}}>
            <Col>
                <Typography.Title level={1}>Oops! There's nothing here. (๑-﹏-๑)</Typography.Title>
                <Typography.Link href="/">Take me home, country roads...</Typography.Link>
            </Col>
        </Row>

    );
};

export default NotFoundPage;
