import { IconBrandGithub, IconBrandThreads, IconBrandTwitter } from '@tabler/icons-react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
            © {year} Drew McMillan
            </div>
            <div className='footer-links'>
                <a href="/github"><IconBrandGithub className='footer-icon' /></a>
                <a href="/twitter"><IconBrandTwitter className='footer-icon' /></a>
                <a href="/threads"><IconBrandThreads className='footer-icon' /></a>
            </div>
        </footer>)
}

export default Footer;
