import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

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

const SideList = styled.div`
position:fixed;
display:inline-block;
max-width: calc(100vw - 36px);
min-height: calc(50vh - 140px);
border-right: 5px solid #ffb200;
width: 200px;
background: hsla(0,0%,100%,.7);
z-index: 1;
list-style: none;
`
const SideListItem = styled.div`
    width:100%;
    box-sizing: border-box;
    &: hover {
        border-right: 3px solid #ffb200;
    }
`
const SideLink = styled(Link)`
  font-size: 17px;
  color: #000;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  `
const HeaderLogoName = styled.div`
width:100%;
height:80px;
max-width: 1100px;
line-height: 2;
padding-left: 100px;
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

function Example() {
    let history = useHistory();
    let path = history.location.pathname
    console.log(path)
    return (
        <Body>
            <BodyTop>
                <HeaderLogoName>
                    <div>
                        react-grid-layout
                    </div>
                </HeaderLogoName>
                <BodyBottom>
                    <SideList>
                        <SideListItem>
                            <SideLink to='/guide/quick-start'>Quick Start
                            </SideLink>
                        </SideListItem>
                        <SideListItem>
                            <SideLink to='/guide/efml'>
                                DragableGraphs
                            </SideLink>
                        </SideListItem>
                        <SideListItem>
                            <SideLink to='/guide/efml'>
                                ToDo
                            </SideLink>
                        </SideListItem>
                        <SideListItem>
                            <SideLink to='/guide/efml'>
                                DailyN
                            </SideLink>
                        </SideListItem>
                    </SideList>
                </BodyBottom >
            </BodyTop >
        </Body >
    );
}

export default Example;
