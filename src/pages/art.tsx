import React, { useState, Suspense, lazy } from 'react';
import { Layout, Row, Col, Typography, Divider, ConfigProvider, Breadcrumb, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
import { StaticImage } from "gatsby-plugin-image"
import '../styles/index.css'
import { mirandaConfig } from '../styles/mirandaConfig';
import Loading from '../components/Loading';
import ArtworksList from '../components/ArtworksList';

const Art = () => {
  return (
    <ConfigProvider
        theme={mirandaConfig}
      >
      <Layout className="layout" style={{backgroundColor:'#FFFCFA'}}>
      <Content style={{width:'75%', margin: 'auto', paddingTop: '2rem'}}>
        <Breadcrumb
                items={[
                {
                    title: <Typography.Link href="/">Miranda ₊ ⊹ ⟡</Typography.Link>,
                },
                {
                    title: 'Art',
                },
                ]}
            />
          <Title>
            Here is a peek into my art practice!
          </Title>
            <p>
                My art practice is central to who I am; I feel most fully myself when I am making art.
                Practicing art allows me to learn about myself, the world around me, and how to exist as myself in such a world. 
                My art reflects and informs my approach to many other things, like research and life in general—read my <Typography.Link href="#creative-process">small ramble on the universality of creative process</Typography.Link> below for more.
            </p>
            <p>
                Below are some of the things I've made.
            </p>
            <ArtworksList />
            <Divider dashed />
            <Title id="creative-process" level={3}>The generality and universality of creative process</Title>
            <p>
                My creative process is the same no matter what medium I am working in. 
            </p>
            <p>
                When making a big painting or starting a research project or casting on a knitting project: first, there is the open-ended, idea generation phase. This phase is exciting but full of ambiguity; it is a search over the space of ideas for the ones which suit the constraints and my tastes. I like to move (walking, dancing, scribbling) while I think, preferably outside. This usually goes best when the body is comfortable and relaxed, when the mind is relatively uncrowded. Here, playfulness and a bit of whimsy are essential. 
            </p>
            <p>
                Next, sketching. Since my background is in drawing, I always start with pencil sketches even if I plan to work the final piece as a painting, sculpture, or textile. The sketches start out as small compositional thumbnails and get progressively larger and more detailed. For research and writing, I like to make outlines, which are usually undirected graphs first before becoming bullet points. 
            </p>
            <p>
                Then, implementation. In this phase, inevitably the making will feel like work. There will be setbacks and victories as the final image slowly comes into focus; hopefully the core underlying insight or idea will be revealed, but only through sustained effort, like chipping away at stone. This phase is the longest, and is the most about self-discipline, persistence, flexibility, and not letting the inevitable “What am I even doing here?” win. Here it is important to constantly take a step back (literally and metaphorically) and look from afar, and let the medium and the piece-in-progress guide itself away from the initial plan. My best artworks happened when I surrendered some of my agency to the medium I was working in, allowing for example a stray mark to assert a new, unplanned, form. My best research happened when I investigated questions that arose naturally over the course of the project rather than the ones I’d initially planned on asking. 
            </p>
            <p>
                Finally, polishing and documentation. Here we add the final highlights in white ink, tweak the x-labels on those graphs, fuss about word choice, bold the significant p-values: all with composition in mind. Here the goal is to best highlight the focal points, blurring and de-emphasizing details which detract from the final idea. 
            </p>
            <p>
                And then—repeat. Art practice is about practice, after all. Each project is its own journey, its own lesson, but the creative process is universal. So, when I practice artmaking and deepen my understanding of this process, I enrich my capacities in all of these other areas (mediums) as well: research, writing, living. <em>Seeing</em> myself mature over time as an artist and as an individual through my art—over the course of my sketchbooks, paintings, silly little crafts—is immensely empowering. Seeing how far I’ve come makes me excited to keep going. This is what I love most about art.
            </p>
      </Content>
      {/* <Footer style={{ textAlign: 'center', backgroundColor:"#FFFCFA" }}>
        I made this website myself using Gatsby, React, Ant Design, and TypeScript.
        Anyways, if you've come all this way, you may as well say hello... (☞ﾟヮﾟ)☞ &nbsp;
        <Link href='https://www.linkedin.com/in/miranda-li-b83859124/'>Linkedin</Link>
        &nbsp;⟡&nbsp;
        <Link href='mailto:mirandal@stanford.edu'>Email</Link>
      </Footer> */}
    </Layout>
    </ConfigProvider>
    
  );
}

export default Art
