import React from 'react';
import styled from 'styled-components'
import ShareLayout from "./ShareLayout"
import { Link } from 'react-router-dom'

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
const Content = styled.div`
  float:right;
  width: calc(100% - 230px);
  height: 100vh;
`

const StyledIframe = styled.iframe`
width:100%;
height:100%;
`

function Example() {
    return (
        <ShareLayout>
            <BodyBottom>
                <SideList>
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
                <Content>
                    <StyledIframe src="https://caloriestracker-ab17f.firebaseapp.com" title="Daily N app"></StyledIframe>
                </Content>
            </BodyBottom >
        </ShareLayout>
    );
}

export default Example;
