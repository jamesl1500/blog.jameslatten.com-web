/**
 * BlogPpost Component
 */
"use client";

import React from 'react';
import Image from 'next/image';

import { strapiUrl } from '@/config';

import profile from '../static/images/profile.jpg';

interface BlogPostProps {
    post: any;
}

const BlogPost = (props: BlogPostProps) => {
    const post_title = props.post.post_title;
    const post_desc = props.post.post_desc;

    const post_url = `/post/${props.post.documentId}`;

    const post_image = `${strapiUrl}${props.post.post_cover_image.url}`;

    return (
        <div className="blog-post">
            <div className="blog-post-image" style={{backgroundImage: "url(" + post_image + ")"}}></div>
            <div className="blog-post-content">
                <h2>{post_title}</h2>
                <p>{post_desc}</p>
                <a href={post_url}>Read More</a>
            </div>
        </div>
    );
};

export default BlogPost;