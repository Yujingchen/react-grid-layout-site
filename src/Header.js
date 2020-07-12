import React from 'react';
import styled, { keyframes } from 'styled-components'
import logo from "./image/react2-3.png"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Nav = styled.div`
font-family: Helvetica,Tahoma,Arial,Hiragino Sans GB,Hiragino Sans GB W3,Microsoft YaHei,STXihei,STHeiti,Heiti,SimSun,sans-serif;
height: 60px;
border-bottom: solid 4px #ffb200;
position: fixed;
top: 0;
width: 100%;
background: hsla(0,0%,100%,.7);
z-index: 2;
opacity: 0.99;
-webkit-backdrop-filter: blur(20px);
backdrop-filter: blur(20px);
`;

const NavBar = styled.div`
height:100%;
width:100%;
margin: 0 auto;
max-width: 1200px;
`;

const HeaderLinks = styled.div`
float: right;
padding-right: 30px;
display: flex;
text-align: center;
flex-direction: row;
`;

const HeaderLink = styled(Link)`
display: inline-block;
font-size: 18px;
box-sizing: border-box;
height: 60px;
line-height: 65px;
color: #000;
cursor: pointer;
padding: 0 10px;
background: transparent;
border-right: none;
text-decoration:none;

${({ active }) => active === "true" && `border-bottom: 3px solid #ffb200`}
`;

const Wrapper = styled.div`
    &: hover ${ HeaderLink} {
    border-bottom: 3px solid #ffb200;
}
`;

const HeaderLogo = styled.div`
// Create a Wrapper component that'll render a <section> tag with some styles
position: absolute;
top: 17px;
background-color: white;
`;
const AppLogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const LogoImage = styled.img`
width: 100px;
height: 91px;
// animation: ${AppLogoSpin} infinite 20s linear;
border-radus:5px;
cursor: pointer;
-webkit-transform: scale(1);
opacity: 1;
&:focus{
    transform: scale(2,2);
}
`;

function Header() {
    const menuItems = [
        'home',
        'guide',
        'example'
    ];
    let history = useHistory();
    let pathname = history.location.pathname.substring(1)
    return (
        <Nav>
            <NavBar>
                <HeaderLogo >
                    <LogoImage src={logo} alt='logo'></LogoImage>
                </HeaderLogo>
                <HeaderLinks>
                    {menuItems.map(menuItem => {
                        console.log(pathname)
                        const isActive = menuItem === pathname ? "true" : "false"
                        return (
                            <Wrapper key={menuItem}>
                                <HeaderLink active={isActive} to={`/${menuItem}`} >
                                    {menuItem.toUpperCase()}
                                </HeaderLink>
                            </Wrapper>
                        )
                    }
                    )}
                </HeaderLinks>
            </NavBar>
        </Nav>
    );
}

export default Header;
