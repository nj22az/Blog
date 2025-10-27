import React, { useState, useEffect } from 'react';
import { HomeView } from './components/PortfolioView';
import { BlogView } from './components/BlogView';
import { AllArticlesView } from './components/AllArticlesView';
import { BlogPost } from './types';

declare const showdown: any;

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'post' | 'all-articles'>('home');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [postContent, setPostContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // This simulates fetching the list of posts that Jekyll would generate.
    fetch('/blog/posts.json')
      .then(res => res.json())
      .then(data => setBlogPosts(data))
      .catch(err => console.error("Failed to load blog posts:", err));
  }, []);

  useEffect(() => {
    if (selectedPost) {
      setIsLoading(true);
      setPostContent('');
      // Fetch the specific post's Markdown content.
      fetch(`/blog/posts/${selectedPost.slug}.md`)
        .then(res => res.text())
        .then(markdown => {
          // Convert Markdown to HTML using showdown
          const converter = new showdown.Converter();
          const html = converter.makeHtml(markdown);
          setPostContent(html);
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Failed to load post content:", err)
          setPostContent('<p>Could not load article content.</p>');
          setIsLoading(false);
        });
    }
  }, [selectedPost]);


  const handleViewPost = (post: BlogPost) => {
    setView('post');
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleGoHome = () => {
    setView('home');
    setSelectedPost(null);
    setPostContent('');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  const handleViewAllArticles = () => {
    setView('all-articles');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (view === 'post' && selectedPost) {
    return (
      <BlogView 
        selectedPost={selectedPost}
        postContent={postContent}
        isLoading={isLoading}
        onBackToHome={handleViewAllArticles}
      />
    );
  }

  if (view === 'all-articles') {
    return (
      <AllArticlesView 
        blogPosts={blogPosts}
        onViewPost={handleViewPost}
        onBackToHome={handleGoHome}
      />
    );
  }

  return (
    <HomeView 
      blogPosts={blogPosts}
      onViewPost={handleViewPost}
      onViewAllArticles={handleViewAllArticles}
    />
  );
};

export default App;