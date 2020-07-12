import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import ShareLayout from "./ShareLayout"

const SideList = styled.div`
${props => props.visible ? `position: absolute;top: ${props.offset + 140}px;` : "position:fixed;"}
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

function GuideLayout({ children }) {
    const [visible, setVisible] = useState(false)
    const [offset, setOffset] = useState("0")
    const onScroll = () => {
        const d = document.querySelector('.hxOqgg');
        if (d) {
            const offsetTop = d.offsetTop
            const scrollY = window.scrollY
            const innerHeight = window.innerHeight
            const offset = scrollY + innerHeight
            if (offset >= offsetTop && !visible) {
                setVisible(true)
                setOffset(offsetTop - innerHeight)
            }
            else if (offset < offsetTop && visible) {
                setVisible(false)
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    })
    let history = useHistory();
    let path = history.location.pathname
    console.log(path)
    return (
        <ShareLayout>
            <SideList visible={visible} offset={offset}>
                <SideListItem>
                    <SideLink to='/guide/quick-start'>Quick Start
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        EFML
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        Basic Binding
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        Two-way Binding
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        Value Subscribing
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        Events Handling
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        Mounting
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        Bundled Rendering
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/efml'>
                        AST Structure
                            </SideLink>
                </SideListItem>
            </SideList>
            {children}
        </ShareLayout>
    );
}

export default GuideLayout;
