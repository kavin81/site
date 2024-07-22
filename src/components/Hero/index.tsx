import "./styles.css";
import { siteConfig } from "../../site.config";

function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="card">
                    <h1 className="title">
                        Hey,I'm{" "}
                        <span className="name_underline">
                            {siteConfig.author}
                        </span>
                    </h1>
                    <div className="desc">
                        <p>
                            A computer science student at{" "}
                            <a className="links" href="https://pes.edu/">
                                PESU
                            </a>{" "}
                            & a fullstack developer.
                        </p>
                        <p>
                            Based in{" "}
                            <a
                                className="links"
                                href="https://www.google.com/maps/place/Bengaluru,+Karnataka/"
                            >
                                Bangalore,India
                            </a>
                        </p>
                    </div>
                    <div className="cta">
                        <a
                            data-umami-event="cta-btn"
                            data-umami-event-action="github"
                            className="button"
                            href={`https://github.com/${siteConfig.connect.github}`}
                        >
                            View Github
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </div>
                        </a>

                        <a
                            data-umami-event="cta-btn"
                            data-umami-event-action="resume"
                            className="button"
                            href="/assets/resume.pdf"
                        >
                            Read Resume
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <img className="pfp" src="/favicon.png" alt="Astro Logo" />
            </div>
        </div>
    );
}

export default Hero;
