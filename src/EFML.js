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

const BulletList = styled.ul`
font-size:15px;
font-weight:500;
`

function EFML() {
    let history = useHistory();
    let path = history.location.pathname
    console.log(path)
    return (
        <GuideLayout>
            <Content>
                <Title1>EFML</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Syntax</Title2>
                            <BulletList>
                                <li><InlineCodeText>></InlineCodeText> stands for tag names. For example, <InlineCodeText>div</InlineCodeText> will be rendered as &lt;div&gt;&lt;/div&gt;.</li>
                                <li><InlineCodeText>.</InlineCodeText> after > stands for class names for this tag. For example, <InlineCodeText>div.some.class.names</InlineCodeText> will be rendered as <InlineCodeText>&lt;div class="some class names"&gt;&lt;/div&gt;</InlineCodeText>.</li>
                                <li><InlineCodeText>#</InlineCodeText> at the end of tag definition stands for the reference name of the element. For example, you can get the original referenced element inside your code like this <InlineCodeText>state.$refs.referenced</InlineCodeText> with the following template <InlineCodeText>>div.some.class.names#referenced.</InlineCodeText></li>
                                <li><InlineCodeText>#</InlineCodeText> stands for the attribute of the tag. For example, <InlineCodeText>#style = background-color: #CCC;</InlineCodeText> after a <InlineCodeText>>div</InlineCodeText> tag will be rendered as <InlineCodeText>&lt;div style="background-color: #CCC;"&gt;&lt;/div&gt;</InlineCodeText>.</li>
                                <li><InlineCodeText>%</InlineCodeText> stands for the property of the tag. For example, when you have %someProperty = something after a >div#testdiv tag, you will find that the value of state.$refs.testdiv.someProperty has already been set to something.</li>
                                <li><InlineCodeText>@</InlineCodeText> stands for the event of the element. For example, write @click = clickHandlerafter a >div tag will create a click handler called clickHandler at state.$methods. What you only need to do is put a handler function to the right place, ef does all the other thing for you.</li>
                                <li><InlineCodeText>.</InlineCodeText>stands fot the text content of the element.For example, write .some text after a >div tag will be rendered as &lt;div>some text&lt;/div&gt;.</li>
                            </BulletList>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>Parser</Title2>
                            <CodeText> &lt;script src="https://unpkg.com/ef.js@latest"&gt; &lt;/script&gt; </CodeText>
                            <PainText>or with package manager</PainText>
                            <CodeText> &lt;script src="https://unpkg.com/ef.js@latest"&gt; &lt;/script&gt; </CodeText>
                        </SectionListItem>
                        <SectionListItem>
                            <Title2>Highlighters</Title2>
                            <PainText>A bunch of code highlighters for EFML have already been released. See blow:</PainText>
                            <BulletList>
                                <li><Marked warning>SublimeEFMLHighlighter</Marked> - EFML syntax highlighter for SublimeText3
   </li>
                                <li><Marked warning>VSCodeEFMLHighlighter</Marked> - EFML syntax highlighter for VSCode
</li>
                                <li><Marked warning>AtomEFMLHighlighter</Marked> - EFML syntax highlighter for Atom
</li>
                                <li><Marked warning>PrismEFMLSyntax</Marked> - EFML syntax for Prism
</li>
                                <li><Marked warning>EFML.vim by deluxghost</Marked> - EFML (*.ef, *.eft) syntax highlighting for Vim
</li>
                            </BulletList>
                        </SectionListItem >
                    </SectionList >
                </Section >
            </Content >
        </GuideLayout >
    );
}

export default EFML;
