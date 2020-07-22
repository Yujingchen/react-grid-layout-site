import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ShareLayout from "./ShareLayout"
const SideList = styled.div`
${props => props.visible ? `position: absolute;top: ${props.offset + 140}px; ` : "position:fixed;"}
${props => props.innerHeight <= 500 & props.innerHeight >= 300 ? "height: 200px; overflow-y:scroll;" : props.innerHeight < 300 ? "height: 100px; overflow-y:scroll;" : ""}
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
    const innerHeight = window.innerHeight
    const onScroll = () => {
        const d = document.querySelector('.sc-fznMnq.etDpzJ');
        if (d) {
            const offsetTop = d.offsetTop
            const scrollY = window.scrollY
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
    return (
        <ShareLayout>
            <SideList visible={visible} offset={offset} innerHeight={innerHeight}>
                <SideListItem>
                    <SideLink to='/guide/quick-start'>Quick Start
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/responsive-usage'>
                        Responsive Usage
                            </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/grid-layout-props'>
                        Grid Layout Props
                    </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/grid-item-props'>
                        Grid Item Props
                    </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/event-handling'>
                        Events Handling
                    </SideLink>
                </SideListItem>
                <SideListItem>
                    <SideLink to='/guide/performance'>
                        Performance
                    </SideLink>
                </SideListItem>
            </SideList>
            {children}
        </ShareLayout>
    );
}

export default GuideLayout;
