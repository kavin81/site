"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import "./header.css";

const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "posts", href: "/posts" },
    { name: "projects", href: "/projects" },
];

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
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <button aria-label="Open menu">
                            <HiMenu size={24} />
                        </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50  z-40" />
                        <Dialog.Content className="fixed top-0 left-0 h-full w-64 bg-black p-6 z-50 text-white font-mono">

                            <Dialog.Close asChild>
                                <button
                                    className="absolute top-4 right-4 text-2xl focus:outline-none hover:opacity-70 transition"
                                    aria-label="Close menu"
                                >
                                    ×
                                </button>
                            </Dialog.Close>
                            <Dialog.Title />
                            <nav className="flex flex-col gap-4 mt-12">
                                {navLinks.map(link => (
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
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </header>
    );
}
