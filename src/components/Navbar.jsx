import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { author } from "../data/data";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isPostPage = location.pathname.startsWith("/post/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {isPostPage ? (
          <Link to="/" className="navbar__back">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to home
          </Link>
        ) : (
          <a href="/" className="navbar__brand">
            <div className="navbar__avatar">{author.initials}</div>
            <span className="navbar__name">
              Vikas <em>T</em>
            </span>
          </a>
        )}

        {!isPostPage && (
          <ul className="navbar__links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#posts">Projects</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
