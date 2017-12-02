
import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
    padding: 60px 0;
`;

const Section = ({ children, className }) => {
    return (
        <StyledSection className={`${className} section`}>{children}</StyledSection>
    );
}

export default Section;