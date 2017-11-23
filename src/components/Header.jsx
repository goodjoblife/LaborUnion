
import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import logo from '../assets/logo.svg';
import logoName from '../assets/logo-name.png';

const StyledHeader = styled.div`
    border-bottom: 1px solid grey;
    position: fixed;
    top: 0;
    width: 100%;
    height: 65px;
    background-color: black;

    .header-container {
        max-width: 1100px;
        margin: auto;
        .header-logo {
            padding: 10px 0;
        }
        .header-logo-name {
            height: 40px;
            padding: 10px 0 10px 20px;
        }
        .cta-button {
            margin-top: 15px;
            padding: 5px 20px;
            float: right;
        }

    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="header-container">
                <img src={logo} className="header-logo"></img>
                <img src={logoName} className="header-logo-name"></img>
                <Button className="cta-button"> 馬上開始組工會 </Button>
            </div>
        </StyledHeader>
    );
};

export default Header;