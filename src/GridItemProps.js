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

function GridItemProps() {
    return (
        <GuideLayout>
            <Content>
                <Title1>Grid Item Props</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Grid Item Props</Title2>
                            <PlainText>RGL supports the following properties on grid items or layout items. When initializing a grid, build a layout array (as in the first example above), or attach this object as the <InlineCodeText>data-grid</InlineCodeText> property to each of your child elements (as in the second example).</PlainText>
                            <PlainText>Note that if a grid item is provided but incomplete (missing one of x, y, w, or h), an error will be thrown so you can correct your layout.</PlainText>
                            <PlainText>If no properties are provided for a grid item, one will be generated with a width and height of <InlineCodeText>1</InlineCodeText>.</PlainText>
                            <PlainText>You can set minimums and maximums for each dimension. This is for resizing; it of course has no effect if resizing is disabled. Errors will be thrown if your mins and maxes overlap incorrectly, or your initial dimensions are out of range.</PlainText>
                            <PlainText>Any <InlineCodeText>&lt;GridItem&gt;</InlineCodeText> properties defined directly will take precedence over globally-set options. For example, if the layout has the property <InlineCodeText>isDraggable: false</InlineCodeText>, but the grid item has the prop <InlineCodeText>isDraggable: true</InlineCodeText>, the item will be draggable, even if the item is marked <InlineCodeText>static: true</InlineCodeText>.</PlainText>                            
                            <CodeText>
                            <Marked >&#123;</Marked><br /><br/>
                            <Marked comment>// A string corresponding to the component key  </Marked><br /><br />
                                <Marked><Marked danger>i</Marked>: string,</Marked><br /><br/>
                                <Marked comment>// These are all in grid units, not pixels</Marked> <br />
                                <Marked><Marked danger>x</Marked>: number,</Marked><br />                             
                                <Marked><Marked danger>y</Marked>: number,</Marked> <br />
                                <Marked><Marked danger>w</Marked>: number,</Marked> <br /> 
                                <Marked><Marked danger>h</Marked>: number, </Marked> <br /> 
                                <Marked><Marked danger>minW</Marked>: ?number = 0,</Marked> <br /> 
                                <Marked><Marked danger>maxW</Marked>: ?number = Infinity,</Marked> <br /> 
                                <Marked><Marked danger>minH</Marked>: ?number = 0,</Marked> <br />
                                <Marked><Marked danger>maxH</Marked>: ?number = Infinity,</Marked> <br />  <br /> 
                                <Marked comment>  // If true, equal to `isDraggable: false, isResizable: false`.</Marked> <br /> 
                                <Marked><Marked danger>static</Marked>,: ?boolean = false,</Marked> <br /> 
                                <Marked comment>// If false, will not be draggable. Overrides `static`.</Marked> <br /> 
                                <Marked><Marked danger>isDraggable</Marked>: ?boolean = true,</Marked> <br /> 
                                <Marked comment>  // If false, will not be resizable. Overrides `static`.</Marked> <br /> 
                                <Marked><Marked danger>isResizable</Marked>: ?boolean = true</Marked> <br /> 
                                <Marked>&#125;</Marked> <br /> 
                            </CodeText>
                        </SectionListItem >
                    </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}

export default GridItemProps;
