import React from 'react';
import { Row, Col, Layout, ConfigProvider, Typography } from 'antd';
import { mirandaConfig } from '../styles/mirandaConfig';

const NotFoundPage = () => {
    return (
        <ConfigProvider
            theme={mirandaConfig}
        >
        <Layout style={{backgroundColor:'#FFFCFA'}}>
        {/* <Layout.Content> */}
            <Row justify="center" align="middle" style={{height: '100vh'}}>
                <Col>
                    <Typography.Title level={1}>Oops! There's nothing here. (๑-﹏-๑)</Typography.Title>
                    <Typography.Link href="/">Take me home, country roads...</Typography.Link>
                </Col>
            </Row>
        {/* </Layout.Content> */}
        </Layout>
        </ConfigProvider>
    );
};

export default NotFoundPage;
