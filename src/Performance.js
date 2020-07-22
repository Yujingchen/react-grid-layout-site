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

function Performance() {
    return (
        <GuideLayout>
            <Content>
                <Title1>Performance</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Performance</Title2>
                            <PlainText><InlineCodeText>&lt;ReactGridLayout&gt;</InlineCodeText> has an optimized shouldComponentUpdate implementation, but it relies on the user memoizing the children array:</PlainText>
                            <CodeText>
                            <Marked comment>// lib/ReactGridLayout.jsx</Marked><br /><br />
                            <Marked keyword>// ...</Marked><br /><br />
                                <Marked ><Marked function>shouldComponentUpdate</Marked>(nextProps: Props, nextState: State) &#123;</Marked><br />
                                <Marked ><Marked keyword>  return</Marked> (</Marked> <br /> 
                                <Marked comment>    // NOTE: this is almost always unequal. Therefore the only way to get better performance</Marked> <br /> 
                                <Marked comment>    // from SCU is if the user intentionally memoizes children. If they do, and they can</Marked> <br /> 
                                <Marked comment>    // handle changes properly, performance will increase.</Marked> <br /> 
                                <Marked ><Marked keyword>    this</Marked>.props.children !== nextProps.children ||</Marked> <br /> 
                                <Marked >    !<Marked function>fastRGLPropsEqual</Marked>(<Marked keyword>this</Marked>.props, nextProps, isEqual) ||</Marked> <br /> 
                                <Marked >    !<Marked function>isEqual</Marked>(<Marked keyword>this</Marked>.state.activeDrag, nextState.activeDrag)</Marked> <br /> 
                                <Marked >  );</Marked> <br /> 
                                <Marked >&#125;</Marked> <br /> 
                                <Marked comment>// ...</Marked> <br /> 
                            </CodeText>
                            <PlainText>If you memoize your children, you can take advantage of this, and reap faster rerenders. For example:
                            </PlainText>
                            <CodeText>
                            <Marked><Marked keyword>function</Marked> MyGrid(props) &#123;</Marked><br/>
                            <Marked>  <Marked keyword>const</Marked> children = React.<Marked function>useMemo</Marked>(() => &#123;</Marked><br/>
                            <Marked>    <Marked keyword>return</Marked> <Marked keyword>new</Marked> Array(props.count).<Marked function>fill</Marked>(undefined).<Marked function>map</Marked>((val, id) => &#123;</Marked><br/>
                            <Marked>      <Marked keyword>return</Marked> &lt;div <Marked danger>key</Marked>=&#123;id&#125; <Marked danger>data-grid</Marked>=&#123;&#123;x: id, y: 1, w: 1, h: 1&#125;&#125; /&gt;;</Marked><br/>
                            <Marked>    });</Marked><br/>
                            <Marked> }, [props.count]);</Marked><br/>
                            <Marked>  <Marked keyword>return</Marked> &lt;<Marked warning>ReactGridLayout</Marked> <Marked danger>cols</Marked>=&#123;12&#125;&gt;&#123;children&#125;&lt;/<Marked warning> ReactGridLayout</Marked>&gt;;</Marked><br/>
                            <Marked>}</Marked><br/>
                            </CodeText>
                            <PlainText>Because the <InlineCodeText>children</InlineCodeText> prop doesn't change between rerenders, updates to <InlineCodeText>&lt;MyGrid&gt;</InlineCodeText> won't result in new renders, improving performance.</PlainText>
                            </SectionListItem >
                        </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}

export default Performance;
