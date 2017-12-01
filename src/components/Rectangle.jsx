
import React from 'react';
import styled from 'styled-components';

const StyledRectangle = styled.div`
    border: 1px solid #FCD406;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    padding: 30px 20px;
    margin: 10px;
    color: #FCD406;
    svg path {
        fill: #FCD406;
    }
    p {
        color: white;
    }
    transition: background-color 0.75s ease;
    transition: color 0.25s ease;

    &:hover {
        background-color: #FCD406;
        border-color: black;
        color: black;
        cursor: pointer;
        svg path {
            fill: black;
        }
        p {
            color: black;
        }
    }

    .rec-icon {
        width: 50px;
        height: 50px;
    }
`;

const Rectangle = ({ SVGIcon, title, content, onClick }) => {
    return (
        <StyledRectangle className="align-center" onClick={onClick}>
            <SVGIcon className="rec-icon" alt="" />
            <h3 className="rec-title align-center">{title}</h3>
            <p className="rec-content align-center">{content}</p>
        </StyledRectangle>
    );
}

export default Rectangle;