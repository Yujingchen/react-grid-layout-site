import React from 'react';
import styled from 'styled-components'
import logo from "./image/react.svg"
import './App.css';

function App() {
  // Create a Title component that'll render an <h1> tag with some styles
  const Header = styled.div`
  height:60px;
  border-bottom: solid 4px #ffb200;
  position: fixed;
  top:0;
  width:100%;
`;
  const HeaderLinks = styled.div`
  float:right;
  padding-right:30px;
  display: flex;
  text-align: center;
  flex-direction: row;
`;
  const HeaderLink = styled.a`
  display: inline-block;
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  color: #000;
  cursor: pointer;
  border-bottom: ${props => props.active ? "3px solid #ffb200" : "none"};
  padding: 0 10px;
  background: transparent;
  border-right: none;
  text-decoration:none;
  font-weight: 600;
`;
  const Wrapper = styled.div`
  &:hover ${HeaderLink}{
    border-bottom: 3px solid #ffb200;
  }
`
  const HeaderLogo = styled.div`
  // Create a Wrapper component that'll render a <section> tag with some styles
  position: absolute;
`;
  const HeaderLogoName = styled.div`
    padding:10px;
    font-weight: 600;
    font-size: 23px;
    position: absolute;
    margin-left: 100px;
    text-shadow: 2px 2px 10px rgba(0,0,0,.5);
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none;
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
  `
  const BodyTop = styled.div`
  padding-top:60px;
  `
  const linkOnClick = (event, el) => {
    event.preventDefault()
    // const activeEl = document.querySelector('.header__link-active')
    // if (activeEl && el) {
    //   activeEl.classList.remove("header__link-active");
    //   el.classList.add("header__link-active")
    // }
  };
  const Body = styled.div`
  font-family: Palatino,Palatino Linotype,Palatino LT STD,Book Antiqua,Amiri,Georgia,serif;
  `
  return (
    <Body>
      <Header>
        <HeaderLogo>
          <img src={logo} alt='logo' ></img>
        </HeaderLogo>
        <HeaderLinks>
          <Wrapper>
            <HeaderLink active href="/home" target="_blank" rel="noopener" onClick={linkOnClick}>
              HOME
            </HeaderLink>
          </Wrapper>
          <Wrapper>
            <HeaderLink href="/home" target="_blank" rel="noopener" onClick={linkOnClick}>
              GUIDE
            </HeaderLink >
          </Wrapper>
          <Wrapper>
            <HeaderLink href="/home" target="_blank" rel="noopener" onClick={linkOnClick}>
              EXAMPLE
            </HeaderLink>
          </Wrapper>
        </HeaderLinks>
      </Header>
      <BodyTop>
        <HeaderLogoName>react-grid-layout</HeaderLogoName>
        <div>
          <h1>Instinctive</h1>
          <span>Do what you believe it shoud do</span>
        </div>
        <div>
          <h1>Simple</h1>
          <span>No logic in template, no DOM in script</span>
        </div>
        <div>
          <h1>Fast</h1>
          <span>Direct binding, no virtualdom</span>
        </div>
        <div>
          <h1>Light</h1>
          <span>Only 8kb gzipped.
              Quick StartGitHub
        </span>
        </div>
        <button>Quick Start</button>
        <button>Quick Start</button>
      </BodyTop>
    </Body>
  );
}

export default App;
