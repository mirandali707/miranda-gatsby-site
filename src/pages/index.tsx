import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Divider, ConfigProvider, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
import { StaticImage } from "gatsby-plugin-image"
import { TagFilterSelect } from '../components/TagFilterSelect';
import { FilterableAccomplishments } from '../components/FilterableAccomplishments';
import '../styles/index.css'
import { mirandaConfig } from '../styles/mirandaConfig';
import { tagProperties } from '../data/tagProperties';

const Home = () => {
  const [activeTags, setActiveTags] = useState(Object.keys(tagProperties))

  return (
    <ConfigProvider
        theme={mirandaConfig}
      >
      <Layout className="layout" style={{backgroundColor:'#FFFCFA'}}>
      <Content style={{width:'75%', margin: 'auto', paddingTop: '2rem'}}>
        <Row gutter={24} justify="space-around" align="middle">
            <Col span={16}>
                <Title>Hi, I'm Miranda ₊ ⊹ ⟡</Title>
                <Paragraph>
                    I'm a student at Stanford studying computer science (BS + MS).
                    I like making human-centered technology, joyful and accessible learning tools and curricula, and art.
                </Paragraph>
                <Paragraph>
                <Link href='https://www.linkedin.com/in/miranda-li-b83859124/'>Linkedin</Link>
                &nbsp;⟡&nbsp;
                <Link href='mailto:mirandal@stanford.edu'>Email</Link>
                &nbsp;⟡&nbsp;
                <Link href='https://github.com/mirandali707'>Github</Link>
                &nbsp;⟡&nbsp;
                <Link href=''>Resume</Link>
                </Paragraph>
            </Col>
            <Col span={8}>
                <StaticImage
                    src="../images/website-headshot.jpeg"
                    alt="A photo of Miranda doing a peace sign"
                    placeholder="blurred"
                    layout="constrained"
                    width={200}
                    height={200}
                    style={{borderRadius: '50%'}}
                />
            </Col>
        </Row>
        <Divider dashed />
        <Row><TagFilterSelect setActiveTags={setActiveTags}/></Row>
        <Row><FilterableAccomplishments activeTags={activeTags}/></Row>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:"#FFFCFA" }}>
        I made this website myself using Gatsby, React, Ant Design, and TypeScript.
        Anyways, if you've come all this way, you may as well say hello... (☞ﾟヮﾟ)☞ &nbsp;
        <Link href='https://www.linkedin.com/in/miranda-li-b83859124/'>Linkedin</Link>
        &nbsp;⟡&nbsp;
        <Link href='mailto:mirandal@stanford.edu'>Email</Link>
        </Footer>
    </Layout>
    </ConfigProvider>
    
  );
}

export default Home 

export const Head = () => <title>Miranda Li</title>