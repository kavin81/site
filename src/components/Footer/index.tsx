import { siteConfig } from "../../site.config";
import "./styles.css";

interface FooterProps {}

function Footer() {


    return (
        <footer>
            <div className="top_bar">
                <div className="footer_column connect">
                    <h4 className="footer_column_title">Connect</h4>
                    <div className="connect_icons">
                        {/* email */}
                        <a href={`mailto:${siteConfig.connect.email}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect
                                width="20"
                                height="16"
                                x="2"
                                y="4"
                                rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        </a>
                        {/* github */}
                        <a href={`https://github.com/${siteConfig.connect.github}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            focusable="false"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z"
                            ></path>
                        </svg>
                        </a>
                        {/* linkedin */}
                        <a
                            href={`https://linkedin.com/${siteConfig.connect.linkedin}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z"
                                ></path>
                            </svg>
                        </a>
                        <a href={`https://leetcode.com/${siteConfig.connect.leetcode}`}>
                        {/* leetcode */}
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>LeetCode</title>
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                        </a>
                        {/* instagram */}
                        <a href={`https://instagram.com/${siteConfig.connect.instagram}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            focusable="false"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5c-2-.8-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1-5.5.7-7.6 1.4-3.8 1.9-5.5 3.6-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8c.1 3.4.7 5.5 1.4 7.6.7 2.1 1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5c2 .7 4.2 1.3 7.6 1.4 3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1 5.5-.7 7.6-1.4c2.1-.7 3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5c.7-2 1.3-4.2 1.4-7.6.1-3.2.1-4.2.1-12.7s.2-9.6.1-13zm-5.6 25.3c-.1 3-.7 4.6-1.1 5.8-.6 1.4-1.3 2.5-2.4 3.5-1.1 1.1-2.1 1.7-3.5 2.4-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1-3-.1-4.6-.7-5.8-1.1-1.4-.6-2.5-1.3-3.5-2.4-1.1-1.1-1.7-2.1-2.4-3.5-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5.1-3 .7-4.6 1.1-5.8.6-1.4 1.3-2.5 2.3-3.5 1.1-1.1 2.1-1.7 3.5-2.3 1.1-.4 2.7-1 5.8-1.1 3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1 1.4.6 2.5 1.3 3.5 2.3 1.1 1.1 1.7 2.1 2.4 3.5.4 1.1 1 2.7 1.1 5.8.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5z"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M32 16.1c-8.9 0-15.9 7.2-15.9 15.9 0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9-7.1-15.9-16-15.9zm0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4z"
                            ></path>
                            <circle
                                cx="48.7"
                                cy="15.4"
                                r="3.7"
                                fill="currentColor"
                            ></circle>
                        </svg>
                        </a>
                    </div>
                </div>
                <div className="footer_column">
                    <h4 className="footer_column_title">Pages</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
                <div className="footer_column">
                    <h4 className="footer_column_title">Resources</h4>
                    <ul>
                        <li><a href="/analytics">Analytics</a></li>
                        <li><a href="/sitemap.xml">Sitemap</a></li>
                        <li><a href="/rss.xml">RSS</a></li>
                    </ul>
                </div>
                <div className="footer_column">
                    <h4 className="footer_column_title">Legal</h4>
                    <ul>
                        <li><a href="/legal/terms-of-service">Terms of Service</a></li>
                        <li><a href="/legal/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/legal/cookie-policy">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom_bar">
                <p>Made with love ❤️</p>
                <p>
                    © {new Date().getFullYear()} {siteConfig.author}. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
