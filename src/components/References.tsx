"use client";

import { useState } from "react";

interface ReferencesProps {
    references: string[];
}

export default function References({ references }: ReferencesProps) {
    const [expanded, setExpanded] = useState(false);
    const visibleRefs = expanded ? references : references.slice(0, 10);

    return (
        <section id="nguon-trich-dan" className="content-section mb-16 scroll-mt-8">
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-text-primary mb-6 leading-tight">
                VIII. Tài Liệu Tham Khảo (APA)
            </h2>

            <ol className="space-y-3 text-sm text-text-secondary leading-relaxed list-none">
                {visibleRefs.map((ref, i) => {
                    // Split reference text from URL
                    const urlMatch = ref.match(/(https?:\/\/[^\s,]+)/);
                    const text = urlMatch
                        ? ref.replace(urlMatch[0], "").replace(/,\s*$/, "").trim()
                        : ref;
                    const url = urlMatch ? urlMatch[0] : null;

                    return (
                        <li key={i} className="flex gap-3 group">
                            <span className="text-gold font-serif font-semibold text-xs mt-0.5 shrink-0 w-6 text-right">
                                {i + 1}.
                            </span>
                            <span>
                                {text}
                                {url && (
                                    <>
                                        {" "}
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gold-dark hover:text-gold underline underline-offset-2 transition-colors break-all"
                                        >
                                            [Link]
                                        </a>
                                    </>
                                )}
                            </span>
                        </li>
                    );
                })}
            </ol>

            {references.length > 10 && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-6 text-sm text-gold-dark hover:text-gold font-medium transition-colors cursor-pointer"
                >
                    {expanded
                        ? "Thu gọn ▲"
                        : `Xem tất cả ${references.length} nguồn trích dẫn ▼`}
                </button>
            )}
        </section>
    );
}
