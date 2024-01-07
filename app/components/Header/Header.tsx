import links from "~/config/links";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="/">Drew McMillan</a>
        </div>
        <div className="nav-links">
          <a href={links.github.url}>Github</a>
          <a href="/contact">Contact</a>
          <a href="/photos">Photos</a>
          <a href="/projects">Projects</a>
          <a href="/cv">CV</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
