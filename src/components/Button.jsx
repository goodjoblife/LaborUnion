
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid #FCD406;
    color: #FCD406;
    background-color: black;
    border-radius: 0;
    padding: 10px 25px;
    font-size: 18px;
    transition: background-color 0.75s ease;
    transition: color 0.25s ease;

    &:hover {
        background-color: #FCD406;
        border-color: black;
        color: black;
        cursor: pointer;
    }
`;

const Button = ({ onClick, children, className }) => {
    return (
        <StyledButton className={className} onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;