import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'
import ShareLayout from './ShareLayout'
import { Link } from 'react-router-dom'
import logo from "./image/react2-3.png"
const StyledButton = styled.div`
    display:inline-block;
    background-color:#fff;
    box-shadow: 0 5px 20px rgba(0,0,0,.5);
    font-size: 20px;
    margin: 0px 20px 0 10px;
    width:130px;
    height:50px;
    text-align:center;
    box-sizing: border-box;
    text-decoration:none;
    cursor:pointer;
    &:hover{
        border-bottom: solid 4px #ffb200;
        box-shadow: 0 5px 25px rgba(0,0,0,.5);
    }
`
const StyledLink = styled(Link)`
display: block;
height:100%;
line-height:50px;
`
const StyledSuperLink = styled.a`
display: block;
height:100%;
line-height:50px;
`
const Wrapper = styled.div`
max-width: 500px;
width:100%;
height:100%;
text-align: left;
overflow: hidden;
max-height: 500px;
display:flex;
justify-content: center;
flex-direction:column;

`
const Content = styled.div`
display:flex;
max-width: 500px;
width: 100%;
height:100%;
align-items: center;
justify-content: center;
flex-direction:column;
}
`
const ButtonWrapper = styled.div`
`
const Header = styled.h1`
display:inline-block;
padding: 10px 0;
font-family: Palatino,Palatino Linotype,Palatino LT STD,Book Antiqua,Amiri,Georgia,serif;
font-size: 80px;
margin-bottom:10px;
font-weight:500;
`
const Scrollable = styled.div`
max-width: 500px;
overflow: hidden;
margin-bottom:30px;
`
const Caption = styled.div`
font-size: 22px;
font-weight: 400;
`
const Page = styled.div`
width: 400px;
display: inline-block;
text-align: left;
padding-right: 100px;`

const HomeBlock = styled.div`
height: 280vh;
width: 100%;
`
const HomeWrapper = styled.div`
display:flex;
${props => !props.reachEnd ? "position:fixed;top:0;" : "position:absolute; top:176vh;"}
text-align: center;
width:100%;
height:100%;
align-items:center;
left:0;
justify-content: center;

`
const ContentWrapper = styled.div`
width: 500px;
height:100%;
`

const StyledImage = styled.img`
display:inline-block;
width: 300px;
height: 270px;
background: hsla(0,0%,100%,.7);
`
function Home() {
    const isMountedRef = useRef(null);
    const [reachEnd, setReachEnd] = useState(false)
    let scrollPos = 0;
    const onScroll = () => {
        const d = document.querySelector('.sc-fzqNJr');
        const scrollY = window.scrollY
        const innerHeight = window.innerHeight
        const percentage = (innerHeight / 853)
        const isScrollingUp = (document.body.getBoundingClientRect()).top > scrollPos
        if (d) {
            if (isScrollingUp) {
                d.scrollLeft = scrollY / percentage;
                (d.scrollLeft < 1500 && reachEnd) && setReachEnd(false)
            }
            else {
                d.scrollLeft = scrollY / percentage;
                (d.scrollLeft >= 1500 && !reachEnd) && setReachEnd(true)
            }
        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    }
    useEffect(() => {
        if (isMountedRef) {
            window.addEventListener('scroll', onScroll)
        }
        return () => isMountedRef.current = false;
    })
    return (
        <ShareLayout>
            <HomeBlock />
            <HomeWrapper reachEnd={reachEnd}>
                <StyledImage src={logo} alt="react-logo" />
                <ContentWrapper>
                    <Content >
                        <Wrapper>
                            <Scrollable>
                                <Page>
                                    <Header>Responsive</Header>
                                    <Caption>
                                        Supports responsive breakpoints</Caption>
                                </Page>
                                <Page>
                                    <Header>Compatible</Header>
                                    <Caption>Compatible with server-rendered apps.</Caption>
                                </Page>
                                <Page>
                                    <Header>Configurable</Header>
                                    <Caption>Configurable packing: horizontal, vertical, or off</Caption>
                                </Page>
                                <Page>
                                    <Header>Recoverable</Header>
                                    <Caption>Layout can be serialized and restored.</Caption>
                                </Page>
                            </Scrollable>
                            <ButtonWrapper>
                                <StyledButton >
                                    <StyledLink to="/guide">Quick Start</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledSuperLink target="_blank" href="https://github.com/STRML/react-grid-layout">Github</StyledSuperLink>
                                </StyledButton>
                            </ButtonWrapper>
                        </Wrapper>
                    </Content>
                </ContentWrapper>
            </HomeWrapper>
        </ShareLayout>
    );
}

export default Home;
