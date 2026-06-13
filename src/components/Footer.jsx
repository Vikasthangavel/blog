import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">dev.blog</span>
        <span className="footer__copy">© {new Date().getFullYear()} · Built with React</span>
        <div className="footer__links">
          <a href="#posts">Posts</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
