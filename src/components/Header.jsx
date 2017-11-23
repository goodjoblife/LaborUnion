
import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledHeader = styled.div`

`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="logo"></div>
            <Button> 馬上開始組工會 </Button>
        </StyledHeader>
    );
};

export default Header;