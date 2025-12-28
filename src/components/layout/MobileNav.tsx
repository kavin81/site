import clsx from "clsx";
import { config } from "~/config";

interface MobileNavProps {
    open: boolean;
    onNavigate: () => void;
    currentPath: string;
    isRouteActive: (current: string, target: string) => boolean;
}

export default function MobileNav({
    open,
    onNavigate,
    currentPath,
    isRouteActive,
}: MobileNavProps) {
    return (
        <nav
            id="site-nav"
            data-open={open}
            className={clsx(
                "hidden",
                "data-[open=true]:absolute data-[open=true]:right-0 data-[open=true]:top-full",
                "data-[open=true]:mt-2 data-[open=true]:flex data-[open=true]:flex-col",
                "data-[open=true]:border border-zinc-700 bg-zinc-900 shadow-md",
                "md:hidden",
            )}
        >
            <ul className="flex flex-col">
                {config.siteHeader.map(item => {
                    const active = isRouteActive(currentPath, item.url);

                    return (
                        <li key={item.url}>
                            <a
                                href={item.url}
                                onClick={onNavigate}
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
    );
}
