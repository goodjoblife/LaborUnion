
import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`
    border: 1px solid grey;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    padding: 30px 20px;
    margin: 10px;

    &:hover {
        background-color: #FCD406;
        border-color: black;
        color: black;
        cursor: pointer;
    }

    .rec-icon {
        width: 50px;
        height: 50px;
    }
`;

const Rectangle = ({ iconImg, title, content, onClick }) => {
    return (
        <StyledRectangle className="align-center" onClick={onClick}>
            <img className="rec-icon" src={iconImg} alt="" />
            <h3 className="rec-title align-center">{title}</h3>
            <p className="rec-content align-center">{content}</p>
        </StyledRectangle>
    );
}

export default Rectangle;