import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import Layout from '../components/Layout.js';
import Profile from '../components/Profile.js';
import PostList from '../components/PostList.js';
import Post from '../components/Post.js';

const IndexPage = () => (
  <Layout>
      <Profile/>
      <PostList>
        <Post title="title" summary="summary" key="1"/>
        <Post title="title" summary="summary" key="2" summaryImg={require('../assets/react.png')}/>
        <Post title="title" summary="summary" key="3"/>
        <Post title="title" summary="summary" key="4"/>
      </PostList>
    </Layout>
)

export default IndexPage
