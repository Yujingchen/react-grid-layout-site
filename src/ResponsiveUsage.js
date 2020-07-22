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

function ResponsiveUsage() {
    return (
        <GuideLayout>
            <Content>
                <Title1>Responsive</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Responsive Usage</Title2>
                            <PlainText>To make RGL responsive, use the &lt;ResponsiveReactGridLayout&gt; element:</PlainText>
                            <CodeText>
                           <Marked> <Marked keyword>import</Marked> &#123; Responsive <Marked keyword>as</Marked> ResponsiveGridLayout &#125; <Marked keyword>from</Marked> 'react-grid-layout';</Marked><br /><br />
                                <Marked keyword>class</Marked> MyResponsiveGrid <Marked keyword>extends </Marked>React.Component &#123;<br />
                                <Marked> <Marked keyword>  render</Marked>() &#123;</Marked> <br />
                                <Marked comment>    // &#123;lg: layout1, md: layout2, ...&#125;</Marked><br />                             
                                <Marked>    <Marked keyword>const</Marked> layouts = <Marked function>getLayoutsFromSomewhere</Marked>();</Marked> <br />
                                <Marked >    <Marked keyword>return</Marked> (</Marked> <br /> 
                                <Marked>      <Marked warning>&lt;ResponsiveGridLayout</Marked> <Marked danger>className</Marked>="layout" <Marked danger>layouts</Marked>=&#123;layouts&#125; </Marked> <br /> 
                                <Marked >        <Marked danger>breakpoints</Marked>=&#123;&#123;lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0&#125;&#125;</Marked> <br /> 
                                <Marked >        <Marked danger>cols</Marked>=&#123;&#123;lg: 12, md: 10, sm: 6, xs: 4, xxs: 2&#125;&#125;&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="1"&gt;1&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="2"&gt;2&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="3"&gt;3&lt;/div&gt;</Marked> <br /> 
                                <Marked >      <Marked warning>&lt;/ResponsiveGridLayout&gt;</Marked></Marked> <br /> 
                                <Marked >    )</Marked> <br /> 
                                <Marked >  }</Marked> <br /> 
                                <Marked >}</Marked> <br /> 
                            </CodeText>

                            <PlainText>When in responsive mode, you should supply at least one breakpoint via the layouts property.</PlainText>
                            <PlainText>
                            When using layouts, it is best to supply as many breakpoints as possible, especially the largest one. If the largest is provided, RGL will attempt to interpolate the rest.
                            </PlainText>
                            <PlainText>
                            You will also need to provide a width, when using <InlineCodeText>&lt;ResponsiveReactGridLayout&gt;</InlineCodeText> it is suggested you use the HOC WidthProvider as per the instructions below.
                            </PlainText>
                            <PlainText>
                            For the time being, it is not possible to supply responsive mappings via the data-grid property on individual items, but that is coming soon.</PlainText>
                        </SectionListItem >
                        <SectionListItem>
                            <Title2>Providing Grid Width</Title2>
                            <PlainText>Both &lt;ResponsiveReactGridLayout&gt; and &lt;ReactGridLayout&gt; take width to calculate positions on drag events. In simple cases a HOC WidthProvider can be used to automatically determine width upon initialization and window resize events.</PlainText>
                            <CodeText>
                            <Marked><Marked keyword>import</Marked> &#123; Responsive,WidthProvider &#125; <Marked keyword>from</Marked> 'react-grid-layout';</Marked><br /><br />
                            <Marked ><Marked keyword>const</Marked> ResponsiveGridLayout = <Marked function>WidthProvider</Marked>(Responsive);</Marked><br /><br />
                            <Marked keyword>class</Marked> MyResponsiveGrid <Marked keyword>extends </Marked>React.Component &#123;<br />
                                <Marked> <Marked keyword>  render</Marked>() &#123;</Marked> <br />
                                <Marked comment>    // &#123;lg: layout1, md: layout2, ...&#125;</Marked><br />                             
                                <Marked>    <Marked keyword>const</Marked> layouts = <Marked function>getLayoutsFromSomewhere</Marked>();</Marked> <br />
                                <Marked >    <Marked keyword>return</Marked> (</Marked> <br /> 
                                <Marked>      <Marked warning>&lt;ResponsiveGridLayout</Marked> <Marked danger>className</Marked>="layout" <Marked danger>layouts</Marked>=&#123;layouts&#125; </Marked> <br /> 
                                <Marked >        <Marked danger>breakpoints</Marked>=&#123;&#123;lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0&#125;&#125;</Marked> <br /> 
                                <Marked >        <Marked danger>cols</Marked>=&#123;&#123;lg: 12, md: 10, sm: 6, xs: 4, xxs: 2&#125;&#125;&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="1"&gt;1&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="2"&gt;2&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="3"&gt;3&lt;/div&gt;</Marked> <br /> 
                                <Marked >      <Marked warning>&lt;/ResponsiveGridLayout&gt;</Marked></Marked> <br /> 
                                <Marked >    )</Marked> <br /> 
                                <Marked >  }</Marked> <br /> 
                                <Marked >}</Marked> <br /> 
                            </CodeText>

                            <PlainText>This allows you to easily replace WidthProvider with your own Provider HOC if you need more sophisticated logic.</PlainText>
                            <PlainText>
                            WidthProvider accepts a single prop, measureBeforeMount. If true, WidthProvider will measure the container's width before mounting children. Use this if you'd like to completely eliminate any resizing animation on application/component mount.
                            </PlainText>
                            <PlainText>
                            Have a more complicated layout? WidthProvider is very simple and only listens to window 'resize' events. If you need more power and flexibility, try the SizeMe React HOC as an alternative to WidthProvider.
                            </PlainText>
                        </SectionListItem >
                    </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}

export default ResponsiveUsage;
