
import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`

`;

const Rectangle = ({ icon, title, content, onClick }) => {
    return (
        <StyledRectangle onClick={onClick}>
            <div className="icon"></div>
            <div className="title"><span>{title}</span></div>
            <div className="content"><p>{content}</p></div>
        </StyledRectangle>
    );
}

export default Rectangle;