import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post, variant = "post" }) => {
  const CardContainer = post.slug ? Link : "article";
  const containerProps = post.slug 
    ? { to: `/post/${post.slug}`, className: `post-card post-card--${variant}` }
    : { className: `post-card post-card--${variant}` };

  return (
    <CardContainer {...containerProps}>
      <div className="post-card__header">
        <div className="post-card__content">
          <h3 className="post-card__title">{post.title}</h3>
          <p className="post-card__excerpt">{post.excerpt}</p>
        </div>
        {post.tag && (
          <span className="post-card__tag">{post.tag}</span>
        )}
      </div>
      <div className="post-card__footer">
        <span className="post-card__meta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          {post.readTime}
        </span>
        <span className="post-card__meta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {post.date}
        </span>
        {post.stack && (
          <div className="post-card__stack">
            {post.stack.map((tech) => (
              <span key={tech} className="post-card__tech">{tech}</span>
            ))}
          </div>
        )}
        {(post.liveUrl || post.repoUrl) && (
          <div className="post-card__project-links" onClick={(e) => e.stopPropagation()}>
            {post.liveUrl && (
              <a href={post.liveUrl} className="post-card__project-link" target="_blank" rel="noreferrer">
                Live ↗
              </a>
            )}
            {post.repoUrl && (
              <a href={post.repoUrl} className="post-card__project-link" target="_blank" rel="noreferrer">
                Repo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default PostCard;
