import React from  'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 36px;
    height: 36px;
`;

export default () => {
    return(
        <a href="https://github.com/jenniexxi" target="_blank" rel="noopener noreferrer">
            <Img src={require('../assets/github_logo.png')}/>
        </a>
    )
}