
import React from 'react';
import styled from 'styled-components';

import bannerImg from '../assets/banner.jpg';

const StyledBanner = styled.div`
    width: 100%;
    text-align: center;
    padding: 80px 0;
    .banner-img {
        max-width: 100%;
    }
`;

const Banner = () => (
    <StyledBanner className="banner">
        <img className="banner-img" src={bannerImg} />
    </StyledBanner>
);

export default Banner;