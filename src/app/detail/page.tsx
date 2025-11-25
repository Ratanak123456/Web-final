"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye } from "lucide-react";
import { useState } from "react";

export default function BlogPost() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock blog data - in real app, this would come from props or API
  const blogPost = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Exploring the latest technologies and methodologies that are shaping the future of web development and how they impact developers and businesses alike.",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies emerging at a rapid pace. As we move through 2024, several key trends are shaping how we build for the web.</p>

      <h2>Artificial Intelligence in Development</h2>
      <p>AI-powered tools are revolutionizing how developers work. From code completion to automated testing, AI is becoming an integral part of the development workflow. Tools like GitHub Copilot and ChatGPT are helping developers write code faster and with fewer errors.</p>

      <p>The integration of AI doesn't stop at code generation. We're seeing AI being used for:</p>
      <ul>
        <li>Automated code reviews and quality assurance</li>
        <li>Intelligent debugging and error detection</li>
        <li>Personalized user experiences</li>
        <li>Content generation and optimization</li>
      </ul>

      <h2>Serverless Architecture Maturation</h2>
      <p>Serverless computing continues to gain traction, with more companies adopting Function-as-a-Service (FaaS) platforms. The benefits include reduced operational overhead, automatic scaling, and cost efficiency.</p>

      <blockquote>
        "Serverless architecture allows developers to focus on writing code rather than managing infrastructure, leading to faster development cycles and more innovative solutions."
      </blockquote>

      <h2>WebAssembly (WASM) Expansion</h2>
      <p>WebAssembly is enabling high-performance applications to run in the browser. We're seeing increased adoption for:</p>
      <ul>
        <li>Video and image editing applications</li>
        <li>Games and interactive experiences</li>
        <li>Scientific simulations and data visualization</li>
        <li>CAD and 3D modeling tools</li>
      </ul>

      <p>As WASM continues to mature, we can expect to see even more complex applications moving to the web.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying current with these trends and continuously learning, developers can position themselves for success in the evolving digital landscape.</p>
    `,
    author: {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      avatar: "/api/placeholder/40/40"
    },
    publishedAt: "December 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "AI", "Serverless", "WASM", "Trends"],
    views: 1247,
    likes: 89
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Getting Started with Next.js 14",
      excerpt: "A comprehensive guide to the latest features in Next.js 14 and how to leverage them in your projects.",
      category: "Technology",
      readTime: "6 min read",
      date: "December 10, 2023"
    },
    {
      id: 3,
      title: "The Power of TypeScript in Modern Web Apps",
      excerpt: "How TypeScript is becoming the standard for building robust and maintainable web applications.",
      category: "Technology",
      readTime: "5 min read",
      date: "December 5, 2023"
    },
    {
      id: 4,
      title: "CSS Architecture for Scale",
      excerpt: "Best practices for organizing and scaling your CSS in large projects using modern methodologies.",
      category: "Technology",
      readTime: "7 min read",
      date: "November 28, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-(--border) bg-(--bg-primary)/80">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="flex items-center text-(--text-secondary) hover:text-(--accent) transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      <div className="container px-4 mx-auto py-8">


        {/* Blog Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            {/* Category */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block px-3 py-1 bg-(--accent)/10 text-(--accent) rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <div className="flex items-center space-x-4 text-(--text-secondary)">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-1 transition-colors ${
                    isBookmarked ? 'text-(--accent)' : 'hover:text-(--accent)'
                  }`}
                >
                  <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-(--accent) transition-colors">
                  <Share2 size={18} />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-(--text-primary) mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-(--text-secondary) mb-6 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-(--text-secondary) text-sm mb-6">
              <div className="flex items-center space-x-1">
                <User size={16} />
                <span>{blogPost.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{blogPost.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye size={16} />
                <span>{blogPost.views} views</span>
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-(--bg-secondary) border border-(--border) rounded-lg p-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-(--accent) rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {blogPost.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-(--text-primary)">{blogPost.author.name}</h3>
                  <p className="text-(--text-secondary) text-sm">{blogPost.author.role}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden bg-(--bg-secondary) border border-(--border)">
            <div className="w-full h-64 lg:h-96 bg-linear-to-br from-(--accent)/20 to-(--accent)/10 flex items-center justify-center">
              <span className="text-(--text-secondary) text-lg">Featured Image</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none 
            prose-headings:text-(--text-primary)
            prose-p:text-(--text-secondary)
            prose-strong:text-(--text-primary)
            prose-blockquote:border-(--accent)
            prose-blockquote:bg-(--accent)/5
            prose-blockquote:text-(--text-secondary)
            prose-ul:text-(--text-secondary)
            prose-ol:text-(--text-secondary)
            prose-li:text-(--text-secondary)
            prose-a:text-(--accent)
            prose-a:no-underline
            hover:prose-a:underline
            mb-12">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-(--bg-secondary) border border-(--border) text-(--text-secondary) rounded-full text-sm hover:border-(--accent) hover:text-(--accent) transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Engagement Section */}
          <div className="flex items-center justify-between py-6 border-t border-b border-(--border) mb-12">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-(--accent) text-white rounded-md hover:bg-(--accent-hover) transition-colors">
                <span>👍</span>
                <span>Like ({blogPost.likes})</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-(--border) text-(--text-secondary) rounded-md hover:bg-(--bg-secondary) transition-colors">
                <span>💬</span>
                <span>Comment</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-(--text-secondary) hover:text-(--accent) transition-colors">
                <Share2 size={18} />
                <span>Share Article</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-(--text-primary) mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block border border-(--border) rounded-lg overflow-hidden hover:border-(--accent) transition-colors group"
              >
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-(--accent)/10 text-(--accent) rounded text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-(--text-primary) mb-2 group-hover:text-(--accent) transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-(--text-secondary) text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-(--text-secondary) text-xs">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto text-center py-12 px-4">
          <div className="bg-(--bg-secondary) border border-(--border) rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-(--text-primary) mb-4">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-(--text-secondary) mb-6 max-w-2xl mx-auto">
              Get the latest articles on web development, design, and technology delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-(--border) rounded-lg bg-(--bg-primary) text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent) transition-colors"
              />
              <button className="px-6 py-3 bg-(--accent) text-white rounded-lg hover:bg-(--accent-hover) transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}