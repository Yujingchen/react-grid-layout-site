import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.div`
font-family: Helvetica,Tahoma,Arial,Hiragino Sans GB,Hiragino Sans GB W3,Microsoft YaHei,STXihei,STHeiti,Heiti,SimSun,sans-serif;
height: 150px;
width: 100%;
background: hsla(0,0%,100%,.7);
z-index: 2;
box-sizing: border-box;
border-bottom: solid 3px #ffb200;
box-shadow: 0-2px 10px rgba(0, 0, 0, .3);
`;
const CopyRight = styled.div`
text-align:center;
padding-top: 50px;
font-size:14px;
cursor: default;
-webkit-touch-callout: none;
-webkit-user-select: none; 
 -khtml-user-select: none;
   -moz-user-select: none; 
    -ms-user-select: none;
        user-select: none;
`

function Footer() {
    return (
        <StyledFooter>
            <CopyRight>
                react-grid-layout is released under <strong>MIT License</strong><br />
                by react-grid-layout and design idea comes from Ef.js<br />
                The site is only for learning purpose. Copyright © 2020
            </CopyRight>
        </StyledFooter>
    );
}

export default Footer;


