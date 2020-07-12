import React from 'react';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
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
const PainText = styled.p`
margin-block-start: 0.5em;
margin-block-end: 0.5em;
font-size: 15px;
white-space: initial;
font-weight:500;
`

const Marked = styled.span`
${props => props.keyword ? "color: #07a;" : ""}
${props => props.comment ? "c>lor: #690;" : ""}
${props => props.function ? "color: #DD4A68;" : ""}
${props => props.punctuation ? "color: #999;" : ""}
${props => props.warning ? "color: #ffb200;" : ""}
`

function QuickStart() {
    let history = useHistory();
    let path = history.location.pathname
    return (
        <GuideLayout>
            <Content>
                <Title1>Quick Start</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Hello World</Title2>
                            <iframe width="100%" height="200" title="jsfiddle" src="//jsfiddle.net/yujingdni/60cn29os/2/embedded/result,js/" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>Installation</Title2>
                            <CodeText> &lt;script src="https://unpkg.com/ef.js@latest"&gt; &lt;/script&gt; </CodeText>
                            <PainText>or with package manager</PainText>
                            <CodeText> &lt;script src="https://unpkg.com/ef.js@latest"&gt; &lt;/script&gt; </CodeText>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>Creating a template</Title2>
                            <PainText>There are two ways of creating a template. One is from template string, another is from the AST. In most situation you do not need to write an AST by hand, so we are only talking about the template string by the time.</PainText>
                            <PainText>First of all, you should get the creation function from ef. In browser, it should be <InlineCodeText>const = ef  &#123; create, t &#125;</InlineCodeText>, with CommonJS loader, it should be  <InlineCodeText>const &#123; create, t &#125; = require('ef.js')</InlineCodeText>, or with ES6 module, it should be <InlineCodeText>import &#123; create, t &#125; from 'ef.js'</InlineCodeText>. create is for both template strings and ASTs, while t only accepts JavaScript template string. Here is the Hello World code:</PainText>
                            <CodeText>
                                <Marked keyword>const</Marked> <Marked punctuation>&#123;</Marked>create, t<Marked punctuation>&#125;</Marked> = ef;<br /><br />
                                <Marked keyword>const </Marked>tpl = <Marked commend>`</Marked> <br />
                                <Marked commend>>h1</Marked> <br />
                                <Marked commend>   .Hello World!</Marked> <br /> <br />
                                <Marked commend>`</Marked> <Marked punctuation>;</Marked> <br /> <br />
                                <Marked keyword>const </Marked> HelloWorld = <Marked function>create</Marked> <Marked punctuation>(</Marked>tpl<Marked punctuation>)</Marked > <Marked punctuation>;</Marked> <br /> <br />
                            </CodeText >
                        </SectionListItem >
                        <SectionListItem>
                            <Title2>Destorying</Title2>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>What is EFML</Title2>
                        </SectionListItem>
                    </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}

export default QuickStart;
