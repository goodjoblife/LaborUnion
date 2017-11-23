
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`

`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="logo"></div>
            <div className="item"><a target="_blank" href="https://www.goodjob.life/"> GoodJob 好工作評論網 </a></div>
            <div className="item"><a target="_blank" href="https://www.facebook.com/goodjob.life/"> Facebook 臉書專頁 </a></div>
        </StyledFooter>
    );
};

export default Footer;