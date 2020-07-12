import React from 'react';
import styled from 'styled-components'
import ShareLayout from './ShareLayout'
import { Link } from 'react-router-dom'
const StyledButton = styled.div`
    display:inline-block;
    background-color:#fff;
    border: none;
    box-shadow: 0 5px 20px rgba(0,0,0,.5);
    font-size: 20px;
    margin: 0 20px 0 0;
    width:130px;
    height:50px;
    line-height:20px;
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
display:inline-block;
max-width: 600px;
width:100%;
margin-top: 150px;
height:600px;
text-align: center;
`
const Content = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
const ButtonWrapper = styled.div`
display: inline-block;
`
const Header = styled.h1`
font-family: Palatino,Palatino Linotype,Palatino LT STD,Book Antiqua,Amiri,Georgia,serif;
font-size: 70px;
margin-bottom:10px;
`
const Scrollable = styled.div`
margin-bottom:30px;
`
const Caption = styled.div`
font-size:20px;
`

function Home() {
    return (
        <ShareLayout>
            <Content>
                <Wrapper>
                    <Scrollable>
                        <Header>Instinctive</Header>
                        <Caption>Do what you believe it shoud do.</Caption>
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
        </ShareLayout>
    );
}

export default Home;
