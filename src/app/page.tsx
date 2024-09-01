import Image from "next/image";

import profile from "../static/images/profile.jpg";

import BlogPost from "../componants/BlogPost";

import { strapiApiUrl } from "@/config";

export default function Home() {
  const getRecentPosts = async () => {
    // Fetch recent posts from the API
    const response = await fetch(`${strapiApiUrl}/blog-posts?populate=*`, 
    {
      method: "GET"
    });

    const data = await response.json();

    // Map the data to the BlogPost component
    return data.data.map((post: any) => {
      return <BlogPost key={post.id} post={post} />;
    });
  }

  return (
    <div className="page-index page">
        <div className="page-inner">
            <div className="page-header">
              <div className="page-header-image">
                <div className="page-header-image-inner">
                  <div className="page-header-image-inner-content">
                    <h1>James Latten</h1>
                    <p>The Blog</p>
                  </div>
                </div>
              </div>

              <div className="page-header-inner container">
                <div className="page-header-content">
                  <Image src={profile} alt="Logo" />
                  <h1>Welcome to my Blog.</h1>
                  <p>This is my safe space to write and express thoughts. I mainly talk about my chaotic life, relationships, technology, and more!</p>
                </div>
              </div>
            </div>
            <div className="page-content">
                <div className="page-content-inner container">
                    <div className="page-content-inner-header">
                        <h2>Recent Posts</h2>
                        <p>Here are some of my recent posts.</p>
                    </div>
                    <div className="page-content-inner-content">
                        {getRecentPosts()}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
