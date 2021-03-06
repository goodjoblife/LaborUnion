
import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import logo from '../assets/logo.jpg';

import { MEDIA } from '../constants/style.constant';

const StyledHeader = styled.div`
    border-bottom: 1px solid #FCD406;
    position: fixed;
    top: 0;
    width: 100%;
    height: 65px;
    background-color: black;
    z-index: 10000;

    @media (max-width: ${MEDIA.SM_MAX}px) {
        height: 55px;
    }

    .header-container {
        max-width: 1100px;
        margin: auto;
        padding: 0 50px;

        @media (max-width: ${MEDIA.SM_MAX}px) {
            max-width: 100%;
            padding: 0 10px;
        }
        @media (max-width: ${MEDIA.XS_MAX}px) {
            max-width: 100%;
            padding: 0 10px;
        }

        .header-logo {
            padding: 10px 0;
            height: 45px;

            @media (max-width: ${MEDIA.SM_MAX}px) {
                height: 25px;
                padding: 15px 0;
            }
            @media (max-width: ${MEDIA.XS_MAX}px) {
                height: 20px;
                padding: 18px 0;
            }
        }
        .cta-button {
            margin-top: 8px;
            padding: 10px 20px;
            float: right;

            @media (max-width: ${MEDIA.SM_MAX}px) {
                margin-top: 8px;
                padding: 7px 10px;
                font-size: 16px;
            }
            @media (max-width: ${MEDIA.XS_MAX}px) {
                margin-top: 8px;
                padding: 7px 10px;
                font-size: 14px;
            }
        }

    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="header-container">
                <a href="/"><img src={logo} className="header-logo" alt="GoodJob 全民組工會"></img></a>
                <Button href="https://goo.gl/forms/eZIWeCtAFCV7aR7G2" alt="馬上開始組工會" className="cta-button"> 馬上開始組工會 </Button>
            </div>
        </StyledHeader>
    );
};

export default Header;