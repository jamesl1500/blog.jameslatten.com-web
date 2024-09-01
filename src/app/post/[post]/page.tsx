import Image from "next/image";

import { strapiUrl, strapiApiUrl } from "@/config";

const getPost = async ( post: any ) => {
  // Fetch recent posts from the API
  const response = await fetch(`${strapiApiUrl}/blog-posts/${post.params.post}?populate=*`, 
  {
    method: "GET"
  });

  const data = await response.json();

  return data.data;
}

export default async function Post(post: any) {

  const postData = await getPost( post );

  // Vars
  const post_title = postData?.post_title;
  const post_desc = postData?.post_desc;
  const post_content = postData?.post_content;
  const post_image = `${strapiUrl}${postData?.post_cover_image?.url}`;


  // If the post does not exist, redirect to 404
  if (!post) {
    return (
      <div className="page-error page">
        <div className="page-inner">
          <div className="page-error-inner container">
            <h1>404</h1>
            <p>Post not found.</p>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="page-index page">
        <div className="page-inner">
            <div className="page-header">
              <div className="page-header-image">
                <div className="page-header-image-inner">
                  <div className="page-header-image-inner-content">
                    <h1>{post_title}</h1>
                    <p>The Blog</p>
                  </div>
                </div>
              </div>

              <div className="page-header-inner container">
                <div className="page-header-content">
                  <h1>Welcome to my Blog.</h1>
                  <p>This is my safe space to write and express thoughts. I mainly talk about my chaotic life, relationships, technology, and more!</p>
                </div>
              </div>
            </div>
            <div className="page-content">
                
            </div>
        </div>
    </div>
  );
}
