import React from 'react';
import { BlogPost } from '../types';

interface HomeViewProps {
  blogPosts: BlogPost[];
  onViewPost: (post: BlogPost) => void;
  onViewAllArticles: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ blogPosts, onViewPost, onViewAllArticles }) => {
  return (
    <div className="min-h-screen bg-gray-200 py-6 sm:py-10 px-4">
      <main className="w-full max-w-5xl mx-auto bg-white shadow-lg border border-gray-300 p-4 sm:p-6 md:p-8 text-gray-800 leading-relaxed text-[14px] sm:text-base">

        {/* Header */}
        <header className="mb-8 text-center border-b-2 border-dashed border-gray-300 pb-6">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mb-2 text-[#4a4a4a]">The Office of Nils Johansson</h1>
          <p className="text-lg text-gray-600">Insights on development, design, and technology.</p>
        </header>

        <div className="flex flex-col lg:flex-row-reverse gap-8">
          
          {/* Sidebar: About Me */}
          <aside className="lg:w-1/3">
            <div className="bg-gray-50/50 border border-gray-300 rounded p-4 sticky top-10">
              <h3 className="font-display font-extrabold text-lg mb-3 text-[#4a4a4a]">About the Author</h3>
              <p className="font-display text-xl font-bold text-gray-800 mb-2">Nils Johansson</p>
              <p className="text-sm text-gray-700 mb-4">
                I'm a seasoned frontend developer with a passion for crafting clean, performant, and user-centric digital experiences. This blog is my space to share insights, tutorials, and case studies.
              </p>
               <div className="border-t border-gray-300 pt-3 text-sm">
                <p className="font-bold text-gray-800">Get In Touch</p>
                <p className="text-gray-700">contact@officeofnilsjohansson.com</p>
               </div>
            </div>
          </aside>

          {/* Main Content: Blog Posts */}
          <div className="lg:w-2/3">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl mb-4 text-[#4a4a4a]">Recent Articles</h2>
            <div className="space-y-2">
              {blogPosts.length > 0 ? blogPosts.slice(0, 3).map((post) => (
                <article 
                  key={post.slug}
                  onClick={() => onViewPost(post)}
                  className="border-b border-dashed border-gray-300 py-4 px-2 -mx-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100/50 rounded"
                >
                  <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                  <h3 className="font-display font-bold text-lg text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-700">{post.excerpt}</p>
                </article>
              )) : (
                <p>Loading articles...</p>
              )}
            </div>
            {blogPosts.length > 3 && (
              <div className="text-center mt-6">
                <button
                  onClick={onViewAllArticles}
                  className="font-display font-semibold text-red-600 hover:underline transition-colors duration-200"
                >
                  View All Articles &rarr;
                </button>
              </div>
            )}
          </div>

        </div>
        
        {/* Footer */}
        <footer className="mt-8 border-t-2 border-red-600 pt-4 text-center text-sm text-gray-700">
           <p>&copy; {new Date().getFullYear()} The Office of Nils Johansson. All Rights Reserved.</p>
           <p>Toyama, Japan</p>
        </footer>
      </main>
    </div>
  );
};