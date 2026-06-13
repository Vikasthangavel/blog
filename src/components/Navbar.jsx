import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__brand">
          <span className="navbar__dot" />
          vikas.dev
        </a>
        <ul className="navbar__links">
          <li><a href="#posts">Posts</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
