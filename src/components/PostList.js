import React from 'react';
import styled from 'styled-components';


const PostList = styled.div`

`;


export default ({children}) => {
    return(
        <PostList>
            {children}
        </PostList>
    )
}