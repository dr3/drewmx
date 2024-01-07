import { IconBrandGithub, IconBrandThreads, IconBrandTwitter } from '@tabler/icons-react';
import './Footer.css'
import links from '~/config/links';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
            © {year} Drew McMillan
            </div>
            <div className='footer-links'>
                <a href={links.github.url}><IconBrandGithub className='footer-icon' /></a>
                <a href={links.twitter.url}><IconBrandTwitter className='footer-icon' /></a>
                <a href={links.threads.url}><IconBrandThreads className='footer-icon' /></a>
            </div>
        </footer>)
}

export default Footer;
