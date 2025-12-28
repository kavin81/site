import React, { useState } from "react";
import clsx from "clsx";
import { config } from "~/config";
import MobileNav from "~/components/layout/MobileNav";

interface HeaderProps {
    currentPath: string;
}

const isRouteActive = (current: string, target: string): boolean => {
    if (target === "/") return current === "/";
    return current === target || current.startsWith(`${target}/`);
};

export default function Header({ currentPath }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative flex flex-wrap items-center justify-between gap-4">
            {/* Site title */}
            <a
                href="/"
                className="text-2xl no-underline transition-all duration-200"
            >
                <span
                    className={clsx(
                        currentPath === "/" &&
                            "underline decoration-1 underline-offset-2",
                    )}
                >
                    {config.siteName}
                </span>
                <span aria-hidden className="animate-flash">
                    {" "}
                    &#x258F;
                </span>
            </a>

            {/* Mobile toggle */}
            <button
                type="button"
                className="ml-4 flex items-center text-2xl md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="site-nav"
                onClick={() => setIsMenuOpen(v => !v)}
            >
                <span className="text-3xl">{isMenuOpen ? "▴" : "▾"}</span>
                <span className="sr-only">Toggle navigation</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex">
                <ul className="flex gap-5">
                    {config.siteHeader.map(item => {
                        const active = isRouteActive(currentPath, item.url);

                        return (
                            <li key={item.url}>
                                <a
                                    href={item.url}
                                    aria-current={active ? "page" : undefined}
                                    className={clsx(
                                        "block px-3 py-2 font-fira-code transition-all duration-200",
                                        "underline-offset-2 decoration-1",
                                        "hover:underline focus-visible:underline focus-visible:outline-none",
                                        active && "underline",
                                    )}
                                >
                                    <kbd>{item.label[0]}</kbd>
                                    {item.label.slice(1)}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Mobile nav */}
            <MobileNav
                open={isMenuOpen}
                onNavigate={() => setIsMenuOpen(false)}
                currentPath={currentPath}
                isRouteActive={isRouteActive}
            />
        </header>
    );
}
