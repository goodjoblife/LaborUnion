import React from 'react';

const BlankLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default BlankLink;