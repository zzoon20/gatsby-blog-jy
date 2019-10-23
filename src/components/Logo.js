import React from  'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 36px;
    height: 36px;
`;

export default () => <Img src={require('../assets/disney.png')}/>;