"use client";

import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";



function ProjectCard({ project }: { project: (typeof projects)[number] }) {
    return (
        <article className="flex flex-col gap-4 p-6 rounded-lg bg-[#0a0a0a] border-2 border-[#1f1f1f] hover:border-[#323232] transition">
            <div className="flex flex-col gap-3">
                <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                        src={project.thumbnail.src}
                        alt={project.thumbnail.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <header className="flex items-start justify-between gap-2">
                    <h2 className="font-semibold text-xl tracking-tight">
                        <Link
                            href={project.github}
                            className="hover:text-neutral-200"
                        >
                            {project.title}
                        </Link>
                    </h2>
                </header>

                <p className="text-neutral-300 line-clamp-2">{project.desc}</p>
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
                {project.tags.map(tag => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#1f1f1f] text-white/60 text-sm font-mono hover:bg-[#2a2a2a] transition"
                    >
                        {tag}
                    </span>
                ))}
            </div>            <footer className="flex pt-4 mt-2 border-t border-[#1f1f1f] text-sm text-white/40">
                <div className="flex items-center justify-between w-full">
                    <Link
                        href={project.github}
                        className="hover:text-white transition flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Source
                    </Link>
                    {project.demo && (
                        <Link
                            href={project.demo}
                            className="hover:text-white transition flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </Link>
                    )}
                </div>
            </footer>
        </article>
    );
}

export default function ProjectsPage() {
    return (
        <main className="mt-20">
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <p className="text-neutral-200 text-lg">
                    A collection of my personal projects, open source
                    contributions, and experiments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </main>
    );
}
