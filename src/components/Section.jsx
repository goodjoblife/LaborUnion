
import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`

`;

const Section = ({ children }) => {
    return (
        <StyledSection>{children}</StyledSection>
    );
}

export default Section;