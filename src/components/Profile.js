import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
    margin: 60px 0 20px 0;
`;

const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: top;
    margin-top: 14px;
`;

const UserWrap = styled.div`
    display: inline-block;
    margin-left: 20px;
`;

const UserName = styled.span`
    font-size: 16px;
    color: #222;
    font-weight: bold;
`;

const UserDescription = styled.div`
    font-size: 14px;
    color: #444;
    line-height: 24px;
    margin-top: 7px;
`;

const SocialLink = styled.div`
    margin-top: 7px;
`;


const SocialLinkItem = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 5px;
`;

const Bedge = styled.span`
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    background: #fafafa;
    color: #fb422f;
    padding: 1px 3px 2px 3px;
`;

export default () => {
    return (
        <Profile>
            <ProfileImg src={require('../assets/disney.png')}/>
            <UserWrap>
                <UserName>jiyeon Hong</UserName>
                <UserDescription>
                    Front-end Developer / UX Engineer<br/>
                    <Bedge>Pro Engineer</Bedge>
                </UserDescription>
                <SocialLink>
                <a href="https://github.com/jenniexxi" target="_blank" rel="noopener noreferrer">
                        <SocialLinkItem src={require('../assets/github_logo.png')}/>
                    </a>
                </SocialLink>
            </UserWrap>
        </Profile>
    )
}