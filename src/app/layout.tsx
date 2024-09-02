import React from "react";
import type { Metadata } from "next";

// Import styles
import "../styles/styles.scss";

// Import templates
import Header from "../templates/header";
import Footer from "../templates/footer";
import Sidebar from "../templates/sidebar";

import Script from 'next/script'

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>  
        {/** Favicon */}
        <link rel="icon" type="image/png" href="./favicon.png" />

        {/** Title */}
        <title>James Latten | Blog</title>

        {/** Meta */}
        <meta name="author" content="James Latten" />
        <meta name="description" content="James Latten's personal blog." />
        <meta name="keywords" content="James Latten, blog, personal, software, development, programming" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#fff" />

        {/* Font Awesome */}
        <Script src="https://kit.fontawesome.com/8ea51260da.js" crossOrigin="anonymous"></Script>
      </head>
      <body>
        <div className="website">
          <div className="overlay"></div>
          <div className="header">
            <Header />
          </div>
          <div className="website-content"> 
            <div className="website-content-inner">
              {children}
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
