import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import Logo from './Logo.js';
import GithubLink from './GithubLink.js';

const HeaderWrap = styled.div`
    width: 100%;
    margin : 0 auto;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;

const HeaderDiv = styled.header`
    width: 680px;
    margin: 0 auto;
    overflow: hidden;
    height: 68px;
`;

const LogoWrap = styled.div`
    float: left;
`;

const GithubWrap = styled.div`
    float: right;
    margin-top: 17px
`;

const Header = ({ siteTitle }) => (
  
  <HeaderWrap>
      <HeaderDiv>
          <LogoWrap>
          <Link
            to="/"
            style={{
              color: `#000`,
              textDecoration: `none`,
            }}
          >
          <Logo/>
        </Link>
          </LogoWrap>
          <GithubWrap>
              <GithubLink/>
          </GithubWrap>
      </HeaderDiv>
  </HeaderWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
