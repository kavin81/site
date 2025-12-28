import React from "react";
import { config } from "~/config";
import clsx from "clsx";

export default function Footer() {
    const commitHash = import.meta.env.VERCEL_GIT_COMMIT_SHA
        ? import.meta.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7)
        : "dev";

    return (
        <footer id="site-footer" className="mt-auto pt-5 pb-4 font-fira-code">
            <div
                className={clsx(
                    "mx-auto flex flex-col gap-6",
                    "md:flex-row md:justify-between md:items-center",
                )}
            >
                {/* Left */}
                <div
                    className={clsx(
                        "flex flex-col gap-2",
                        "items-center md:items-start",
                    )}
                >
                    <p className="text-sm">Copyright © 2025 Kavin.</p>

                    <div className="flex items-center gap-1 text-sm">
                        {config.siteSocials.map((social, index) => (
                            <React.Fragment key={social.label}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener"
                                    className={clsx(
                                        "underline decoration-1 underline-offset-2",
                                        "transition-opacity hover:opacity-80",
                                    )}
                                >
                                    {social.label}
                                </a>

                                {index < config.siteSocials.length - 1 && (
                                    <span className="text-xs text-gray-600">
                                        ǀ
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="hidden md:flex flex-col gap-2 items-end">
                    <a
                        href="https://astro.build"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            src="/assets/built-with-astro.svg"
                            alt="Built with Astro"
                            width={120}
                            height={20}
                        />
                    </a>

                    <div className="text-sm">commit: {commitHash}</div>
                </div>
            </div>
        </footer>
    );
}
