import React from 'react';
import styled from 'styled-components'
import './App.css';

const Body = styled.div`
max-width: 1200px;
margin: 0 auto;
-ms-overflow-x: auto; /* IE8 */
-ms-overflow-y: hidden; /* IE8 */
overflow-y: hidden;
white-space:nowrap;
overflow-x: hidden;
`
const BodyTop = styled.div`
padding-top: 60px;
`
const BodyBottom = styled.div`
  padding: 0 18px 48px;
  overflow: hidden;
  min-height: calc(100vh - 140px);
`
const HeaderLogoName = styled.div`
width:100%;
height:80px;
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

function ShareLayout({ children }) {
    return (
        <Body>
            <BodyTop>
                <HeaderLogoName>
                    <div>
                        react-grid-layout
                    </div>
                </HeaderLogoName>
                <BodyBottom>
                    {children}
                </BodyBottom >
            </BodyTop >
        </Body >
    );
}

export default ShareLayout;
