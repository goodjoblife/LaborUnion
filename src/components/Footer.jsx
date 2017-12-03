
import React from 'react';
import styled from 'styled-components';
import BlankLink from './BlankLink';
import logo from '../assets/logo.jpg';
import goodjobLogo from '../assets/goodjob-and-name.png';

const StyledFooter = styled.div`
    border-top: 1px solid #FCD406;
    padding-top: 15px;
    text-align: center;

    .item a {
        color: white;
        cursor: pointer;
        text-decoration: none;

        &:visited {
            color: white;
        }
        &:hover {
            color: #FCD406;
        }
    }
    .logo {
        height: 45px;
        margin-bottom: 15px;
    }
    .goodjob-and-logo {
        height: 30px;
    }
    .powered-by {
        vertical-align: super;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="logo">
                <a href={`${process.env.PUBLIC_URL}/`}>
                    <img src={logo} alt="GoodJob 全民組工會" className="logo"/>
                </a>
            </div >
            <div className="item">
                <span className="powered-by"> Powered By </span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.goodjob.life/">
                    <img src={goodjobLogo} alt="GoodJob 好工作評論網" className="goodjob-and-logo"/>
                </a>
            </div>
            <div className="item">
                <BlankLink href="https://www.facebook.com/goodjob.life/"> Facebook 臉書專頁 </BlankLink> /
                <BlankLink href="https://github.com/goodjoblife/LaborUnion"> Github Repo </BlankLink>
            </div>
        </StyledFooter>
    );
};

export default Footer;