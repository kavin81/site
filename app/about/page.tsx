"use client";

import React from "react";
import "@/css/globals.css";

// --- About Page Data ---
const aboutData = {
    name: "About Me",
    summary: `I'm a full-stack developer who enjoys working across the stack, with a growing focus on Go for backend development. I like building things that are fast, simple, and reliable—whether it's a clean UI or a solid API. Mostly, I'm into writing code that makes sense and gets the job done.`,
    skills: [
        "Next.js",
        "Golang",
        "Gin",
        "PostgreSQL",
        "TypeScript",
        "React",
        "Tailwind CSS",
    ],
    resumeUrl: "/resumé.pdf",
    resumeLabel: "Resumé",
};

// Animated skill pill component
function AnimatedSkill({ skill, delay }: { skill: string; delay: number }) {
    return (
        <li
            className="px-3 py-1 rounded font-mono text-xs bg-white/10 text-white border border-white/10 shadow-sm animate-fade-in-up"
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: "both",
            }}
        >
            {skill}
        </li>
    );
}

export default function AboutPage() {
    return (
        <section className="mt-20 flex flex-col gap-6 max-w-2xl mx-auto px-4">
            {/* Header */}
            <h1 className="text-4xl sm:text-4xl font-bold">{aboutData.name}</h1>

            {/* About summary */}
            <p className="text-neutral-200 text-lg">{aboutData.summary}</p>

            {/* Skills section */}
            <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Skills &amp; Tools
                </h2>
                <ul className="flex flex-wrap gap-3">
                    {aboutData.skills.map((skill, i) => (
                        <AnimatedSkill
                            skill={skill}
                            key={skill}
                            delay={i * 80}
                        />
                    ))}
                </ul>
            </div>

            {/* Animation keyframes for pills */}
            <style jsx global>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(16px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
                }
            `}</style>
        </section>
    );
}
