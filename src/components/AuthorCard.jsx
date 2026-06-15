import { author } from "../data/data";
import "./AuthorCard.css";

const AuthorCard = () => {
  return (
    <section className="author-card" id="about">



      {/* Greeting + Name */}
      <p className="author-card__greeting">Hello, I'm</p>
      <h1 className="author-card__name">{author.name}</h1>

      {/* Role pill */}
      <div className="author-card__role">
        <span className="author-card__role-dot" />
        Full-Stack Developer
        <span className="author-card__cursor" />
      </div>

      {/* Bio */}
      <p className="author-card__bio">
        I build production-grade apps from{" "}
        <span className="highlight-orange">idea to deployment</span>. Full-stack
        products with Python, React &amp; AI — always focused on{" "}
        <span className="highlight-green">real-world impact.</span>
      </p>

      {/* Status box */}
 
  

      {/* CTA Buttons */}
      <div className="author-card__ctas">
        <a href="#posts" className="author-card__cta author-card__cta--primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          </svg>
          View Projects
        </a>
        <a href={author.links.portfolio} target="_blank" rel="noreferrer" className="author-card__cta author-card__cta--secondary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Portfolio
        </a>
        <a href={author.links.email} className="author-card__cta author-card__cta--secondary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default AuthorCard;
