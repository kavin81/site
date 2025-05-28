"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import "./header.css";

const HiMenu = dynamic(() => import("react-icons/hi").then(mod => mod.HiMenu), { ssr: false });

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "posts", href: "/posts" },
    { name: "projects", href: "/projects" },
];

function MobileMenu({ open, setOpen, navLinks }: { open: boolean; setOpen: (v: boolean) => void; navLinks: NavLink[] }) {
    const menuRef = useRef<HTMLDivElement>(null);
    // Close on ESC
    useEffect(() => {
        if (!open) return;
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);
    // Focus trap
    useEffect(() => {
        if (!open || !menuRef.current) return;
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length) focusable[0].focus();
    }, [open]);
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
            <div
                ref={menuRef}
                className="fixed top-0 left-0 h-full w-64 bg-black p-6 z-50 text-white font-mono"
                role="dialog"
                aria-modal="true"
            >
                <button
                    className="absolute top-4 right-4 text-2xl focus:outline-none hover:opacity-70 transition"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                >
                    ×
                </button>
                <nav className="flex flex-col gap-4 mt-12">
                    {navLinks.map((link: NavLink) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:underline transition"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full pt-7 flex justify-between items-center px-[3rem] lg:px-0">
            <Link href="/" className="font-bold text-[24px]">
                {siteConfig.name}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex gap-6 items-center">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="font-mono nav-links"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Nav */}
            <div className="sm:hidden">
                <button aria-label="Open menu" onClick={() => setOpen(true)}>
                    <HiMenu size={24} />
                </button>
                <MobileMenu open={open} setOpen={setOpen} navLinks={navLinks} />
            </div>
        </header>
    );
}
