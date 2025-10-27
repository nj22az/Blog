import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';

interface AllArticlesViewProps {
  blogPosts: BlogPost[];
  onViewPost: (post: BlogPost) => void;
  onBackToHome: () => void;
}

export const AllArticlesView: React.FC<AllArticlesViewProps> = ({
  blogPosts,
  onViewPost,
  onBackToHome
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [blogPosts]);

  const filteredAndSortedPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Filter by tag
    if (selectedTag) {
      posts = posts.filter(post => post.tags.includes(selectedTag));
    }

    // Filter by search term
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(lowercasedTerm) ||
        post.excerpt.toLowerCase().includes(lowercasedTerm)
      );
    }

    // Sort
    posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return posts;
  }, [blogPosts, searchTerm, selectedTag, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-200 py-6 sm:py-10 px-4">
      <main className="w-full max-w-5xl mx-auto bg-white shadow-lg border border-gray-300 p-4 sm:p-6 md:p-8 text-gray-800 leading-relaxed">
        <button 
          onClick={onBackToHome} 
          className="font-display text-red-600 hover:underline mb-6 text-sm"
        >
          &larr; Back to Home
        </button>
        <header className="mb-8 border-b-2 border-dashed border-gray-300 pb-6">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#4a4a4a]">The Archive</h1>
          <p className="text-lg text-gray-600 mt-1">Search, filter, and read all articles.</p>
        </header>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-2/3 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              aria-label="Search articles"
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="w-full sm:w-1/3 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              aria-label="Sort articles"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-bold mr-2">Tags:</span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-xs font-semibold px-2 py-1 rounded-full border transition-colors ${!selectedTag ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs font-semibold px-2 py-1 rounded-full border transition-colors ${selectedTag === tag ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Post List */}
        <div className="space-y-2">
          {filteredAndSortedPosts.length > 0 ? filteredAndSortedPosts.map((post) => (
            <article 
              key={post.slug}
              onClick={() => onViewPost(post)}
              className="border-b border-dashed border-gray-300 py-4 px-2 -mx-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100/50 rounded"
            >
              <p className="text-xs text-gray-500 mb-1">{post.date}</p>
              <h3 className="font-display font-bold text-lg text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </article>
          )) : (
            <p className="text-center text-gray-500 py-8">No articles found matching your criteria.</p>
          )}
        </div>

      </main>
    </div>
  );
};