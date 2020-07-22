import React from 'react';
import styled, { keyframes } from 'styled-components'
import logo from "./image/react2.4.png"
import ShareLayout from "./ShareLayout"
import './App.css';

const HeaderLogoName = styled.div`
width:100%;
height:100px;
max-width: 1100px;
line-height: 2;
padding-left:100px;
font-weight: 600;
font-size: 30px;
pointer-events: none;
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
const BodyBottom = styled.div`
marginTop: "100px";
text-align: center;
padding-top:150px;
`
const Body = styled.div`
font-family: Helvetica,Tahoma,Arial,Hiragino Sans GB,Hiragino Sans GB W3,Microsoft YaHei,STXihei,STHeiti,Heiti,SimSun,sans-serif;
max-width: 1200px;
min-height: calc(100vh - 140px);
margin: 0 auto;
-ms-overflow-x: auto; /* IE8 */
-ms-overflow-y: hidden; /* IE8 */
overflow-y: hidden;
white-space:nowrap;
overflow-x: hidden;
`
const LogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const LogoImage = styled.img`
background-color: white;
width: 150px;
height: 131px;
animation: ${LogoSpin} infinite 20s linear;
`;



function Home() {
    return (
        <ShareLayout>
            <Body>
                <BodyTop>
                    <HeaderLogoName>
                        <div>
                            react-grid-layout
                    </div>
                    </HeaderLogoName>
                    <BodyBottom>
                        <LogoImage src={logo} alt='logo'></LogoImage>
                        <h2>Opps! <br />Nothing seems to be here...</h2>
                    </BodyBottom>
                </BodyTop>
            </Body >
        </ShareLayout>
    );
}

export default Home;
