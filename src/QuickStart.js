import React from 'react';
import styled from 'styled-components'
import GuideLayout from './GuideLayout'

const Content = styled.div`
  float:right;
  width: calc(100% - 230px);
`
const Title1 = styled.h1`
margin:0;
padding:0 10px 20px;
font-weight: extra-bold;
`
const Section = styled.section`
`
const SectionList = styled.ol`
margin:0;
`
const SectionListItem = styled.li`
font-size:24px;  
font-weight: bold;
`
const Title2 = styled.h2`
font-size: 24px;
margin:0;
border-bottom: solid 1px #D3D3D3;
`
const CodeText = styled.pre`
background-color: #f3f3f3;
font-size: 12px;
padding: 3px 5px;
overflow: auto;
font-family: monospace;
font-weight:500;
`
const InlineCodeText = styled.span`
background-color: #f3f3f3;
font-size: 12px;
padding: 3px 5px;
overflow: auto;
font-family: monospace;
font-weight:500;
`
const PlainText = styled.p`
margin-block-start: 0.5em;
margin-block-end: 0.5em;
font-size: 15px;
white-space: initial;
font-weight:500;
`

const Marked = styled.span`
${props => props.keyword ? "color: #07a;" : ""}
${props => props.comment ? "color: #690;" : ""}
${props => props.function ? "color: #DD4A68;" : ""}
${props => props.punctuation ? "color: #999;" : ""}
${props => props.warning ? "color: #ffb200;" : ""}
${props => props.danger ? "color:#d73a49" : ""}
`

function QuickStart() {
    return (
        <GuideLayout>
            <Content>
                <Title1>Quick Start</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Demo</Title2>
                            <iframe width="100%" height="200" src="//jsfiddle.net/yujingdni/3ek9mxp5/33/embedded/result,js/"></iframe>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>Installation</Title2>
                            <PlainText>Install the React-Grid-Layout package package using npm:</PlainText>
                            <CodeText>npm install react-grid-layout</CodeText>
                            <PlainText>Include the following stylesheets in your application:</PlainText>
                            <CodeText>/node_modules/react-grid-layout/css/styles.css</CodeText>
                            <CodeText>/node_modules/react-resizable/css/styles.css</CodeText>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>Usage</Title2>
                            <PlainText>Use ReactGridLayout like any other component. The following example below will produce a grid with three items where:</PlainText>
                            <PlainText>
                                <ul>
                                    <li>users will not be able to drag or resize item a</li>
                                    <li>item b will be restricted to a minimum width of 2 grid blocks and a maximum width of 4 grid blocks</li>
                                    <li>users will be able to freely drag and resize item c</li>
                                </ul>
                            </PlainText>

                            <CodeText>
                                <Marked keyword>import</Marked> <Marked warning>GridLayout</Marked> <Marked keyword>from</Marked> <Marked>'react-grid-layout';</Marked><br /><br />
                                <Marked keyword>class</Marked> MyFirstGrid <Marked keyword>extends </Marked>React.Component &#123;<br />
                                <Marked keyword>  render() &#123;</Marked> <br />
                                <Marked comment>    // layout is an array of objects, see the demo for more complete usage </Marked><br />                             
                                <Marked >    <Marked keyword>const</Marked> layout = [</Marked> <br />
                                <Marked >      &#123; i: 'a', x: 0, y: 0, w: 1, h: 2, static: true&#125;,</Marked> <br /> 
                                <Marked >      &#123; i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 &#125;,</Marked> <br /> 
                                <Marked >      &#123; i: 'c', x: 4, y: 0, w: 1, h: 2 &#125;,</Marked> <br /> 
                                <Marked >    ];</Marked> <br /> 
                                <Marked > <Marked keyword>return</Marked> (</Marked> <br /> 
                                <Marked >      <Marked warning>&lt;GridLayout</Marked> <Marked danger>className</Marked>="layout" <Marked danger>layout</Marked>=&#123;layout&#125; <Marked danger>cols</Marked>=&#123;12&#125; <Marked danger>rowHeight</Marked>=&#123;30&#125; <Marked danger>width</Marked>=&#123;1200&#125; &gt;</Marked> <br /> 
                                <Marked >         &lt;div <Marked danger>key</Marked>="a"&gt;a &lt;/div&gt;</Marked> <br /> 
                                <Marked >         &lt;div <Marked danger>key</Marked>="b"&gt;b &lt;/div&gt;</Marked> <br /> 
                                <Marked >         &lt;div <Marked danger>key</Marked>="c"&gt;c &lt;/div&gt;</Marked> <br /> 
                                <Marked >       <Marked warning>&lt;/GridLayout&gt;</Marked></Marked> <br /> 
                                <Marked >    )</Marked> <br /> 
                                <Marked >  }</Marked> <br /> 
                                <Marked > }</Marked> <br /> 
                            </CodeText >
                        </SectionListItem >
                    </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}

export default QuickStart;
