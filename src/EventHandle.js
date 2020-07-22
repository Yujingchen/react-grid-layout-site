import React from 'react';
import styled, { ThemeConsumer } from 'styled-components'
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
                <Title1>Event Handling</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Drag Event Handling</Title2>
                            <PlainText><InlineCodeText>&lt;ReactGridLayout&gt;</InlineCodeText> supports event handling for each state of drag and resize action, use it by given event listener's name and a callback function to do your wanted response action 
</PlainText>
                            <PlainText>
                            The available parameter are <InlineCodeText>layout,oldItem,newItem,placeholder,e and element</InlineCodeText></PlainText>
                            <CodeText>
 

                                <Marked keyword>class</Marked> MyResponsiveGrid <Marked keyword>extends </Marked>React.Component &#123;<br />
                                <Marked> <Marked keyword>  render</Marked>() &#123;</Marked> <br />
                                <Marked comment>    // &#123;lg: layout1, md: layout2, ...&#125;</Marked><br />                             
                                <Marked>    <Marked keyword>const</Marked> layouts = <Marked function>getLayoutsFromSomewhere</Marked>();</Marked> <br />
                                <Marked >    <Marked keyword>return</Marked> (</Marked> <br /> 
                                <Marked>      <Marked warning>&lt;ResponsiveGridLayout</Marked> <Marked danger>className</Marked>="layout" <Marked danger>layouts</Marked>=&#123;layouts&#125; </Marked> <br /> 
                                <Marked >        <Marked danger>breakpoints</Marked>=&#123;&#123;lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0&#125;&#125;</Marked> <br /> 
                                <Marked >        <Marked danger>cols</Marked>=&#123;&#123;lg: 12, md: 10, sm: 6, xs: 4, xxs: 2&#125;&#125;&gt;</Marked> <br /> 
                                <Marked >        dragStart=&#123;(layout,oldItem,newItem,placeholder,e,element)=>&#123; </Marked> <br /> 
                                <Marked >        console.log(oldItem," is dragging")</Marked> <br /> 
                                <Marked>&#125;&#125;</Marked> <br /> 
                                    <Marked>&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="1"&gt;1&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="2"&gt;2&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="3"&gt;3&lt;/div&gt;</Marked> <br /> 
                                <Marked >      <Marked warning>&lt;/ResponsiveGridLayout&gt;</Marked></Marked> <br /> 
                                <Marked >    )</Marked> <br /> 
                                <Marked >  }</Marked> <br /> 
                                <Marked >}</Marked> <br /> 


 



                            </CodeText>
                            </SectionListItem>

                        <SectionListItem>
                            <Title2>Resize Browser Event Handling</Title2>
                            <PlainText><InlineCodeText>&lt;ReactGridLayout&gt;</InlineCodeText> supports event handling for change of breakpoint and col when browser is resized, use it by given event listener's name and a callback function to do your wanted response action </PlainText>
                            <PlainText>
                            The available parameter are <InlineCodeText>newBreakpoint, newClos</InlineCodeText></PlainText>
                            <CodeText>
                            <Marked keyword>class</Marked> MyResponsiveGrid <Marked keyword>extends </Marked>React.Component &#123;<br />
                                <Marked> <Marked keyword>  render</Marked>() &#123;</Marked> <br />
                                <Marked comment>    // &#123;lg: layout1, md: layout2, ...&#125;</Marked><br />                             
                                <Marked>    <Marked keyword>const</Marked> layouts = <Marked function>getLayoutsFromSomewhere</Marked>();</Marked> <br />
                                <Marked >    <Marked keyword>return</Marked> (</Marked> <br /> 
                                <Marked>      <Marked warning>&lt;ResponsiveGridLayout</Marked> <Marked danger>className</Marked>="layout" <Marked danger>layouts</Marked>=&#123;layouts&#125; </Marked> <br /> 
                                <Marked >        <Marked danger>breakpoints</Marked>=&#123;&#123;lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0&#125;&#125;</Marked> <br /> 
                                <Marked >        <Marked danger>cols</Marked>=&#123;&#123;lg: 12, md: 10, sm: 6, xs: 4, xxs: 2&#125;&#125;&gt;</Marked> <br /> 
                                <Marked >        onBreakpointChange=&#123;(newBreakpoint,newCols)=>&#123; </Marked> <br /> 
                                <Marked >        console.log("new breakpoint is", newBreakpoint)</Marked> <br /> 
                                    <Marked>&#125;&#125;</Marked> <br /> 
                                    <Marked>&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="1"&gt;1&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="2"&gt;2&lt;/div&gt;</Marked> <br /> 
                                <Marked >        &lt;div <Marked danger>key</Marked>="3"&gt;3&lt;/div&gt;</Marked> <br /> 
                                <Marked >      <Marked warning>&lt;/ResponsiveGridLayout&gt;</Marked></Marked> <br /> 
                                <Marked >    )</Marked> <br /> 
                                <Marked >  }</Marked> <br /> 
                                <Marked >}</Marked> <br /> 
                            </CodeText>
                            </SectionListItem>

                        </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}



export default Performance;
