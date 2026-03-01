import { Section } from "@/lib/types";
import ContentTable from "./ContentTable";

interface ContentSectionProps {
    section: Section;
}

export default function ContentSection({ section }: ContentSectionProps) {
    // Helper function to parse and style [1], [2] as academic citations
    const renderWithCitations = (text: string) => {
        const parts = text.split(/(\[\d+\])/g);
        return parts.map((part, index) => {
            if (part.match(/^\[\d+\]$/)) {
                return (
                    <sup key={index} className="mx-0.5 font-bold">
                        <a
                            href="#nguon-trich-dan"
                            className="text-gold hover:text-gold-dark transition-colors no-underline"
                            title="Đến phần Tài liệu tham khảo"
                        >
                            {part}
                        </a>
                    </sup>
                );
            }
            return part;
        });
    };

    return (
        <section id={section.id} className="content-section mb-16">
            {/* Section heading */}
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-text-primary mb-6 leading-tight scroll-mt-8">
                {section.title}
            </h2>

            {/* Section paragraphs */}
            {section.paragraphs.map((p, i) => (
                <p key={i} className={`academic-paragraph ${i === 0 ? "drop-cap" : ""}`}>
                    {renderWithCitations(p)}
                </p>
            ))}

            {/* Section table */}
            {section.table && <ContentTable table={section.table} />}

            {/* Subsections */}
            {section.subsections?.map((sub) => (
                <div key={sub.id} id={sub.id} className="mt-10">
                    <h3 className="font-serif text-xl md:text-[1.35rem] font-semibold text-text-primary mb-5 leading-snug scroll-mt-8">
                        {sub.title}
                    </h3>

                    {sub.paragraphs.map((p, i) => (
                        <p key={i} className="academic-paragraph">
                            {renderWithCitations(p)}
                        </p>
                    ))}

                    {sub.table && <ContentTable table={sub.table} />}
                </div>
            ))}

            {/* Section divider */}
            <div className="mt-14 gold-divider" />
        </section>
    );
}
