import { featuredPost } from "../data/data";
import "./FeaturedPost.css";

const FeaturedPost = () => {
  return (
    <article className="featured-post">
      <div className="featured-post__badge">
        <span>FEATURED</span>
        <span>POST</span>
      </div>
      <h1 className="featured-post__title">{featuredPost.title}</h1>
      <p className="featured-post__excerpt">{featuredPost.excerpt}</p>
      <div className="featured-post__meta">
        <span className="featured-post__meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {featuredPost.date}
        </span>
        <span className="featured-post__meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          {featuredPost.readTime}
        </span>
        <span className="featured-post__meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          {featuredPost.category}
        </span>
      </div>
      <a href={`/post/${featuredPost.slug}`} className="featured-post__cta">
        Read article
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </article>
  );
};

export default FeaturedPost;
