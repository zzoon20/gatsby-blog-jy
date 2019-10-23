import React from 'react';
import styled from 'styled-components';


const Post = styled.div`
    border: 1px solid #999;
    border-radius: 3px;
    padding: 20px 50px 30px 50px;
    margin-bottom: 30px;
`;

const PostTitle = styled.div`
    font-size: 24px;
    color: #222;
    font-weight: bold;
    margin-bottom: 30px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: nomral;
    overflow: hidden;
`;
const PostSummary = styled.div`
    font-size: 18px;
    color: #888;
    line-height: 1.5em;
    width: 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    height: 3em;
`;

const SummaryImg = styled.img`
    display: block;
    width: 100%;
    height: 180px;
    margin-bottom: 30px;
`;

export default ({title, summary, summaryImg}) => {
    return(
        <Post>
            <PostTitle>
                {title}
            </PostTitle>
            
            {
                summaryImg
                ?
                <SummaryImg src={summaryImg}/>
                : null
            }
            
            <PostSummary>
                {summary}
            </PostSummary>
        </Post>
    )
}

