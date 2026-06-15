import { author } from "../data/data";
import "./AuthorCard.css";

const AuthorCard = () => {
  return (
    <section className="author-card" id="about">
      <div className="author-card__top">
        <div className="author-card__avatar">{author.initials}</div>
        <div className="author-card__info">
          <p className="author-card__greeting">Full Stack Developer</p>
          <h1 className="author-card__name">{author.name}</h1>
          <div className="author-card__title-badge">
            <span />
            Open to Opportunities · {author.location}
          </div>
        </div>
      </div>

      <p className="author-card__subtitle">{author.subtitle}</p>

      <div className="author-card__stats">
        <div className="author-card__stat">
          <span className="author-card__stat-value">5+</span>
          <span className="author-card__stat-label">Projects Shipped</span>
        </div>
        <div className="author-card__stat-divider" />
        <div className="author-card__stat">
          <span className="author-card__stat-value">3</span>
          <span className="author-card__stat-label">Tech Stacks</span>
        </div>
        <div className="author-card__stat-divider" />
        <div className="author-card__stat">
          <span className="author-card__stat-value">8.2</span>
          <span className="author-card__stat-label">CGPA</span>
        </div>
        <div className="author-card__stat-divider" />
        <div className="author-card__stat">
          <span className="author-card__stat-value">2nd</span>
          <span className="author-card__stat-label">Hackathon Place</span>
        </div>
      </div>

      <div className="author-card__links">
        <a href={author.links.portfolio} target="_blank" rel="noreferrer" className="author-card__link author-card__link--primary">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Portfolio
        </a>
        <a href={author.links.github} target="_blank" rel="noreferrer" className="author-card__link author-card__link--secondary">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a href={author.links.email} className="author-card__link author-card__link--secondary">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Email
        </a>
      </div>
    </section>
  );
};

export default AuthorCard;
