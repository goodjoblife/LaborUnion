
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid white;
    color: white;
    background-color: black;
    border-radius: 0;
    padding: 10px 25px;
    font-size: 18px;

    &:hover {
        border-color: #FCD406;
        color: #FCD406;
        cursor: pointer;
    }
`;

const Button = ({ onClick, children, className }) => {
    return (
        <StyledButton className={className} onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;