import {
  IconBrandGithub,
  IconBrandThreads,
  IconBrandTwitter,
} from "@tabler/icons-react";
import "./Footer.css";
import links from "~/config/links";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>© {year} Drew McMillan</div>
      <div className="footer-links">
        <a href={links.github.url} aria-label="My Github account">
          <IconBrandGithub className="footer-icon" />
        </a>
        <a href={links.twitter.url} aria-label="My Twitter account">
          <IconBrandTwitter className="footer-icon" />
        </a>
        <a href={links.threads.url} aria-label="My Threads account">
          <IconBrandThreads className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
