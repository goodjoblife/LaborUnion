
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    border: 1px solid #FCD406;
    color: #FCD406;
    background-color: black;
    border-radius: 0;
    padding: 15px 25px;
    font-size: 18px;
    font-weight: 500;
    transition: background-color 0.75s ease;
    transition: color 0.25s ease;
    text-decoration: none;

    &:hover {
        background-color: #FCD406;
        border-color: black;
        color: black;
        cursor: pointer;
    }
`;

const Button = ({ href, alt, children, className }) => {
    return (
        <StyledButton
            href={href}
            alt={alt}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </StyledButton>
    );
};

export default Button;