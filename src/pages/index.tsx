import React, { useState, Suspense, lazy } from 'react';
import { Layout, Row, Col, Typography, Divider, ConfigProvider, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
import { StaticImage } from "gatsby-plugin-image"
import '../styles/index.css'
import { mirandaConfig } from '../styles/mirandaConfig';
import { tagProperties } from '../data/tagProperties';
import Loading from '../components/Loading';

const TagFilterSelect = lazy(() => import('../components/TagFilterSelect'));
const FilterableAccomplishments = lazy(() => import('../components/FilterableAccomplishments'));
const PublicationsList = lazy(() => import('../components/PublicationsList'));
const AnyOrAllToggle = lazy(() => import('../components/AnyOrAllToggle'));

const Home = () => {
  const [activeTags, setActiveTags] = useState(Object.keys(tagProperties))
  const [anyOrAll, setAnyOrAll] = useState('any')

  return (
    <ConfigProvider
        theme={mirandaConfig}
      >
      <Layout className="layout" style={{backgroundColor:'#FFFCFA'}}>
      <Content style={{width:'75%', margin: 'auto', paddingTop: '2rem'}}>
        <Suspense fallback={<Loading />}>
          <IntroHeader />
          <Divider dashed />
          <Research />
          <Divider dashed />
          <Experience 
            activeTags={activeTags}
            anyOrAll={anyOrAll}
            setActiveTags={setActiveTags}
            setAnyOrAll={setAnyOrAll}
          />
        </Suspense>
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

const IntroHeader = () => {
  return (
  <Row gutter={24} justify="space-around" align="middle">
      <Col span={16}>
          <Title>Hi, I'm Miranda ₊ ⊹ ⟡</Title>
          <Paragraph>
              I'm a student at Stanford studying computer science (B.S. '23, M.S. '24).
              I like making human-centered technology, joyful and accessible learning tools and curricula, and art.
          </Paragraph>
          <Paragraph>
          <Link href='https://www.linkedin.com/in/miranda-li-b83859124/'>Linkedin</Link>
          &nbsp;⟡&nbsp;
          <Link href='mailto:mirandal@stanford.edu'>Email</Link>
          &nbsp;⟡&nbsp;
          <Link href='https://github.com/mirandali707'>Github</Link>
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
  )
}

const Research = () => {
  return <>
    <Title level={3}>Research</Title>
    <Row>
      <PublicationsList/>
    </Row>
  </>
}

const Experience = ({
  activeTags,
  anyOrAll,
  setActiveTags,
  setAnyOrAll
}) => {
  return <>
    <Title level={3}>Experience</Title>
    <Row gutter={8}>
      <Col flex="auto"><TagFilterSelect setActiveTags={setActiveTags}/></Col>
      <Col><AnyOrAllToggle anyOrAll={anyOrAll} setAnyOrAll={setAnyOrAll}/></Col>
    </Row>
    <Row><FilterableAccomplishments activeTags={activeTags} anyOrAll={anyOrAll}/></Row>
  </>
}

export default Home 

export const Head = () => <title>Miranda Li</title>