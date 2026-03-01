"use client";

import { useState, useEffect, useCallback } from "react";
import { TocItem } from "@/lib/types";

interface TableOfContentsProps {
    items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    // Scroll spy using IntersectionObserver
    useEffect(() => {
        const allIds: string[] = [];
        items.forEach((item) => {
            allIds.push(item.id);
            item.children?.forEach((child) => allIds.push(child.id));
        });

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
        );

        allIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveId(id);
                setIsOpen(false);
            }
        },
        []
    );

    const tocContent = (
        <nav aria-label="Mục lục">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.15em] text-text-secondary/60 mb-5">
                Mục Lục
            </h2>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`toc-link block py-1.5 pl-3 text-sm border-l-2 transition-all duration-200 ${activeId === item.id
                                    ? "toc-link-active border-l-gold text-gold-dark font-semibold"
                                    : "border-l-transparent text-text-secondary/70 hover:text-text-primary hover:border-l-border-subtle"
                                }`}
                        >
                            {item.title}
                        </a>
                        {item.children && (
                            <ul className="ml-3 space-y-0.5">
                                {item.children.map((child) => (
                                    <li key={child.id}>
                                        <a
                                            href={`#${child.id}`}
                                            onClick={(e) => handleClick(e, child.id)}
                                            className={`toc-link block py-1 pl-3 text-xs border-l-2 transition-all duration-200 ${activeId === child.id
                                                    ? "toc-link-active border-l-gold text-gold-dark font-semibold"
                                                    : "border-l-transparent text-text-secondary/50 hover:text-text-primary hover:border-l-border-subtle"
                                                }`}
                                        >
                                            {child.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );

    return (
        <>
            {/* Desktop sidebar TOC */}
            <aside className="hidden lg:block sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pr-4 no-print">
                {tocContent}
            </aside>

            {/* Mobile floating button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-border-subtle shadow-lg rounded-full px-4 py-2.5 text-sm font-medium text-text-primary hover:shadow-xl transition-shadow no-print cursor-pointer"
                aria-label="Mở mục lục"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gold"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="15" y2="12" />
                    <line x1="3" y1="18" x2="18" y2="18" />
                </svg>
                Mục Lục
            </button>

            {/* Mobile drawer overlay */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-50 no-print">
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 pt-8 overflow-y-auto animate-fade-in">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                            aria-label="Đóng mục lục"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        {tocContent}
                    </div>
                </div>
            )}
        </>
    );
}
