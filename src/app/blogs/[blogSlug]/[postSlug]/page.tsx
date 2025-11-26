"use client";

import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Eye,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";

// Import blog data
import technologyBlog from "../../../../data/blogs/technology-blog.json";
import designBlog from "../../../../data/blogs/design-blog.json";
import productivityBlog from "../../../../data/blogs/productivity-blog.json";
import lifestyleBlog from "../../../../data/blogs/lifestyle-blog.json";
import authorsData from "../../../../data/authors.json";
import Image from "next/image";

// Type for blog data (simplified)
type BlogData = {
  blog: {
    id: number;
    slug: string;
    name: string;
    description: string;
    category: string;
    featured: boolean;
    color: string;
    icon: string;
    coverImage: string;
  };
  posts: Array<{
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    authorId: number;
    tags: string[];
    publishedAt: string;
    readTime: number;
    featured: boolean;
    stats: {
      views: number;
      likes: number;
      comments: number;
      shares: number;
    };
    featuredImage: {
      url: string;
      alt: string;
      credit: string;
    };
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string[];
    };
    content: Array<{
      type: string;
      text?: string;
      level?: number;
      items?: string[];
      language?: string;
      code?: string;
    }>;
  }>;
};

// Map of all blogs
const blogData: Record<string, BlogData> = {
  technology: technologyBlog as BlogData,
  design: designBlog as unknown as BlogData, // <<== here, i include the unknown
  productivity: productivityBlog as BlogData,
  lifestyle: lifestyleBlog as BlogData,
};

export default function BlogPostDetail() {
  const params = useParams();
  const blogSlug = params.blogSlug as string;
  const postSlug = params.postSlug as string;

  const [isBookmarked, setIsBookmarked] = useState(false);

  // Get the specific blog and post
  const currentBlog = blogData[blogSlug];

  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-(--bg-primary) flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--text-primary) mb-4">
            Blog not found
          </h1>
          <Link href="/blogs" className="text-(--accent) hover:underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const blogPost = currentBlog.posts.find((post) => post.slug === postSlug);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-(--bg-primary) flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--text-primary) mb-4">
            Post not found
          </h1>
          <Link
            href={`/blogs/${blogSlug}`}
            className="text-(--accent) hover:underline"
          >
            Return to {currentBlog.blog.name}
          </Link>
        </div>
      </div>
    );
  }

  // Get author info
  const author = authorsData.authors.find(
    (a) => a.id === blogPost.authorId
  ) || {
    name: "Unknown Author",
    role: "Writer",
  };

  // Format content blocks to HTML with proper styling
  const renderContent = (content: any[]) => {
    return content
      .map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return `<p class="mb-6 text-(--text-secondary) leading-relaxed text-lg" key=${index}>${block.text}</p>`;

          case "heading":
            if (block.level === 2) {
              return `<h2 class="text-2xl font-bold text-(--text-primary) mt-8 mb-4 pb-2 border-b border-(--border)" key=${index}>${block.text}</h2>`;
            } else if (block.level === 3) {
              return `<h3 class="text-xl font-semibold text-(--text-primary) mt-6 mb-3" key=${index}>${block.text}</h3>`;
            } else {
              return `<h${block.level} class="text-${
                7 - (block.level || 2)
              }xl font-bold text-(--text-primary) mt-8 mb-4" key=${index}>${
                block.text
              }</h${block.level}>`;
            }

          case "list":
            return `
          <ul class="my-6 space-y-2" key=${index}>
            ${block.items
              ?.map(
                (item) => `
              <li class="flex items-start">
                <span class="text-(--accent) mr-3 mt-1">•</span>
                <span class="text-(--text-secondary) leading-relaxed">${item}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        `;

          case "code":
            return `
          <div class="my-6 rounded-lg overflow-hidden" key=${index}>
            <div class="bg-gray-900 text-gray-100 px-4 py-2 text-sm font-medium flex justify-between items-center">
              <span>${block.language || "code"}</span>
              <button class="text-xs opacity-70 hover:opacity-100">Copy</button>
            </div>
            <pre class="bg-gray-800 text-gray-100 p-4 overflow-x-auto text-sm"><code>${
              block.code
            }</code></pre>
          </div>
        `;

          case "blockquote":
            return `
          <blockquote class="border-l-4 border-(--accent) bg-(--accent)/5 pl-6 py-4 my-6 italic text-(--text-secondary)" key=${index}>
            <p class="text-lg">${block.text}</p>
          </blockquote>
        `;

          case "image":
            return `
      <figure class="my-8" key=${index}>
        <div class="rounded-xl overflow-hidden bg-(--bg-secondary) border border-(--border)">
          <img 
            src="${block.url}" 
            alt="${block.alt || ""}" 
            class="w-full h-auto oject-cover"
            loading="lazy"
          />
        </div>
        ${
          block.caption
            ? `
          <figcaption class="text-center text-(--text-secondary) mt-3 text-sm">
            ${block.caption}
            ${
              block.credit
                ? ` <span class="text-(--text-secondary)/70">Credit: ${block.credit}</span>`
                : ""
            }
          </figcaption>
        `
            : ""
        }
      </figure>
    `;

          default:
            return `<p class="mb-6 text-(--text-secondary) leading-relaxed" key=${index}>${block.text}</p>`;
        }
      })
      .join("");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts (posts from the same blog, excluding current post)
  const relatedPosts = currentBlog.posts
    .filter((post) => post.id !== blogPost.id)
    .slice(0, 3)
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: currentBlog.blog.name,
      readTime: `${post.readTime} min read`,
      date: formatDate(post.publishedAt),
    }));

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-(--border) bg-(--bg-primary)/80">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <Link
              href={`/blogs`}
              className="flex items-center text-(--text-secondary) hover:text-(--accent) transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All Blogs
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
              <span
                className="inline-block px-3 py-1 text-white rounded-full text-sm font-medium"
                style={{ backgroundColor: currentBlog.blog.color }}
              >
                {currentBlog.blog.name}
              </span>
              <div className="flex items-center space-x-4 text-(--text-secondary)">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-1 transition-colors ${
                    isBookmarked ? "text-(--accent)" : "hover:text-(--accent)"
                  }`}
                >
                  <Bookmark
                    size={18}
                    fill={isBookmarked ? "currentColor" : "none"}
                  />
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
                <span>{author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{formatDate(blogPost.publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{blogPost.readTime} min read</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye size={16} />
                <span>{blogPost.stats.views} views</span>
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-(--bg-secondary) border border-(--border) rounded-lg p-4 mb-8">
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: currentBlog.blog.color }}
                >
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-(--text-primary)">
                    {author.name}
                  </h3>
                  <p className="text-(--text-secondary) text-sm">
                    {author.role}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image - ACTUAL IMAGE */}
          <div className="mb-8 rounded-xl overflow-hidden bg-(--bg-secondary) border border-(--border)">
            <div className="w-full h-auto lg:h-96 relative">
              <Image
                src={blogPost.featuredImage.url}
                alt={blogPost.featuredImage.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          {/* Blog Content - Using Tailwind Prose */}
          <div
            className="prose prose-lg max-w-none 
  prose-headings:text-(--text-primary)
  prose-p:text-(--text-secondary)
  prose-p:leading-relaxed
  prose-strong:text-(--text-primary)
  prose-strong:font-semibold
  prose-blockquote:border-(--accent)
  prose-blockquote:bg-(--accent)/5
  prose-blockquote:text-(--text-secondary)
  prose-blockquote:italic
  prose-ul:text-(--text-secondary)
  prose-ol:text-(--text-secondary)
  prose-li:text-(--text-secondary)
  prose-li:leading-relaxed
  prose-a:text-(--accent)
  prose-a:no-underline
  hover:prose-a:underline
  prose-img:rounded-xl
  prose-img:shadow-md
  prose-figcaption:text-center
  prose-figcaption:text-(--text-secondary)
  prose-figcaption:text-sm
  prose-pre:bg-gray-800
  prose-pre:text-gray-100
  prose-pre:border-0
  mb-12"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: renderContent(blogPost.content),
              }}
            />
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
                <span>Like ({blogPost.stats.likes})</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-(--border) text-(--text-secondary) rounded-md hover:bg-(--bg-secondary) transition-colors">
                <span>💬</span>
                <span>Comment ({blogPost.stats.comments})</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-(--text-secondary) hover:text-(--accent) transition-colors">
                <Share2 size={18} />
                <span>Share Article ({blogPost.stats.shares})</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-(--text-primary) mb-6">
              More from {currentBlog.blog.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${blogSlug}/${post.slug}`}
                  className="block border border-(--border) rounded-lg overflow-hidden hover:border-(--accent) transition-colors group bg-(--bg-primary)"
                >
                  <div className="p-6">
                    <span
                      className="inline-block px-2 py-1 rounded text-xs font-medium mb-3 text-white"
                      style={{ backgroundColor: currentBlog.blog.color }}
                    >
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
        )}

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto text-center py-12 px-4">
          <div className="bg-(--bg-secondary) border border-(--border) rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-(--text-primary) mb-4">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-(--text-secondary) mb-6 max-w-2xl mx-auto">
              Get the latest articles on web development, design, and technology
              delivered straight to your inbox.
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
