import React from 'react';
import { BlogPost } from '../types';

interface BlogViewProps {
  selectedPost: BlogPost;
  postContent: string;
  isLoading: boolean;
  onBackToHome: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  selectedPost,
  postContent,
  isLoading,
  onBackToHome,
}) => {
  return (
    <div className="min-h-screen bg-gray-200 py-6 sm:py-10 px-4">
      <main className="w-full max-w-5xl mx-auto bg-white shadow-lg border border-gray-300 p-4 sm:p-6 md:p-8 text-gray-800 leading-relaxed">
        <article>
          <button 
            onClick={onBackToHome} 
            className="font-display text-red-600 hover:underline mb-6 text-sm"
          >
            &larr; Back to All Articles
          </button>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl mb-2 text-[#4a4a4a]">{selectedPost.title}</h1>
          <p className="text-xs text-gray-500 mb-6">{selectedPost.date}</p>
          {isLoading ? (
            <p className="text-sm text-gray-500">Loading article...</p>
          ) : (
            <div 
              className="text-sm sm:text-base text-gray-700 space-y-4 prose"
              dangerouslySetInnerHTML={{ __html: postContent }}
            />
          )}
        </article>
      </main>
    </div>
  );
};