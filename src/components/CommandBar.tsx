import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Command } from "cmdk";
import {
    FiSearch,
    FiCompass,
    FiExternalLink,
    FiMapPin,
    FiUsers,
} from "react-icons/fi";

import { config } from "~/lib/config";

type Entry = {
    id: string;
    label: string;
    hint?: string;
    url: string;
    group: "Navigate" | "Social";
};

const useEntries = () => {
    return useMemo(
        () => [
            ...config.siteHeader.map(item => ({
                id: `nav-${item.url}`,
                label: item.label,
                hint: item.url,
                url: item.url,
                group: "Navigate" as const,
            })),
            ...config.siteSocials.map(item => ({
                id: `social-${item.label}`,
                label: item.label,
                hint: item.username,
                url: item.url,
                group: "Social" as const,
            })),
        ],
        [],
    );
};

const useFilteredEntries = (entries: Entry[], query: string) => {
    return useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return entries;
        return entries.filter(entry =>
            `${entry.label} ${entry.hint ?? ""} ${entry.url}`
                .toLowerCase()
                .includes(term),
        );
    }, [entries, query]);
};

const useFooterVisibility = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const footer = document.getElementById("site-footer");
        if (!footer) return;

        const observer = new IntersectionObserver(
            entries => setVisible(entries.some(e => e.isIntersecting)),
            { threshold: 0.1 },
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return visible;
};

const CommandItem = ({
    item,
    onSelect,
}: {
    item: Entry;
    onSelect: (url: string) => void;
}) => {
    const Icon = item.group === "Navigate" ? FiCompass : FiExternalLink;

    return (
        <Command.Item
            value={`${item.label} ${item.hint ?? ""}`}
            onSelect={() => onSelect(item.url)}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 text-sm hover:bg-white/5 aria-selected:bg-white/10"
        >
            <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-white/60" />
                <div>
                    <p className="font-medium my-0">{item.label}</p>
                    <p className="text-xs text-white/60 my-0">
                        {item.hint ?? item.url}
                    </p>
                </div>
            </div>
            <span className="text-[10px] uppercase text-white/50">
                {item.group === "Navigate" ? "Nav" : "Social"}
            </span>
        </Command.Item>
    );
};

const CommandGroup = ({
    title,
    icon: Icon,
    items,
    onSelect,
}: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    items: Entry[];
    onSelect: (url: string) => void;
}) => {
    if (!items.length) return null;

    return (
        <Command.Group
            heading={
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide py-3 text-white/60">
                    <Icon className="h-4 w-4" />
                    {title}
                </div>
            }
            className="mb-2 px-1 py-1"
        >
            {items.map(item => (
                <CommandItem key={item.id} item={item} onSelect={onSelect} />
            ))}
        </Command.Group>
    );
};

const SearchButton = ({
    onClick,
    keyLabel,
    visible,
}: {
    onClick: () => void;
    keyLabel: string;
    visible: boolean;
}) => (
    <div
        className={`fixed bottom-6 right-6 z-40 hidden md:block transition-all duration-300 ease-out ${
            visible
                ? "pointer-events-none translate-y-3 scale-95 opacity-0"
                : "translate-y-0 scale-100 opacity-100"
        }`}
    >
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/70 px-4 py-2 text-sm text-white shadow-lg shadow-black/30 backdrop-blur-md hover:border-white/30"
        >
            <FiSearch className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wide">Search</span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] text-white/70">
                {keyLabel}K
            </span>
        </button>
    </div>
);

export default function CommandBar() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const entries = useEntries();
    const filtered = useFilteredEntries(entries, query);
    const footerVisible = useFooterVisibility();

    const navigate = useCallback((url: string) => {
        setOpen(false);
        setQuery("");
        window.location.href = url;
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(prev => !prev);
            }
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const navItems = filtered.filter(item => item.group === "Navigate");
    const socialItems = filtered.filter(item => item.group === "Social");

    return (
        <>
            <SearchButton
                onClick={() => setOpen(true)}
                keyLabel="⌘"
                visible={footerVisible}
            />

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Command Bar"
                className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-4"
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-lg border border-white/20 bg-zinc-900 shadow-2xl">
                    <div className="flex items-center gap-3 border-b border-white/20 px-3 py-2">
                        <Command.Input
                            value={query}
                            onValueChange={setQuery}
                            placeholder="Jump to page or social..."
                            autoFocus
                            className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                        />
                        <span className="rounded bg-white/10 px-2 py-1 text-[10px] text-white/70">
                            Esc
                        </span>
                    </div>

                    <Command.List className="max-h-[65vh] overflow-y-auto p-2">
                        <Command.Empty className="px-3 py-4 text-sm text-white/60">
                            No matches
                        </Command.Empty>

                        <CommandGroup
                            title="Navigate"
                            icon={FiMapPin}
                            items={navItems}
                            onSelect={navigate}
                        />
                        <CommandGroup
                            title="Social"
                            icon={FiUsers}
                            items={socialItems}
                            onSelect={navigate}
                        />
                    </Command.List>
                </div>
            </Command.Dialog>
        </>
    );
}
