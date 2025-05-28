import dynamic from 'next/dynamic';

import { siteConfig } from "@/lib/siteConfig";
const { social } = siteConfig;

const IoLogoGithub = dynamic(() => import('react-icons/io').then(mod => mod.IoLogoGithub));
const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin));
const FaDiscord = dynamic(() => import('react-icons/fa').then(mod => mod.FaDiscord));
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter));
const MdEmail = dynamic(() => import('react-icons/md').then(mod => mod.MdEmail));

export default function Footer() {
    return (
        <footer className="mt-24 py-8 border-t border-white/10 text-white/80 text-sm flex flex-col items-center gap-4 w-full">
            <div className="flex flex-wrap justify-center gap-6 w-full">
                <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-white transition"
                >
                    <IoLogoGithub size={22} />
                </a>
                <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-white transition"
                >
                    <FaLinkedin size={22} />
                </a>
                <a
                    href={social.email}
                    aria-label="Email"
                    className="hover:text-white transition"
                >
                    <MdEmail size={22} />
                </a>
                <a
                    href={social.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="hover:text-white transition"
                >
                    <FaDiscord size={22} />
                </a>
                <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-white transition"
                >
                    <FaTwitter size={22} />
                </a>
            </div>
            <div className="opacity-60 text-center w-full">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
        </footer>
    );
}
