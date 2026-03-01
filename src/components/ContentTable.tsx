import { ContentTable as ContentTableType } from "@/lib/types";

interface ContentTableProps {
    table: ContentTableType;
}

export default function ContentTable({ table }: ContentTableProps) {
    return (
        <div className="my-8 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="academic-table">
                <thead>
                    <tr>
                        {table.headers.map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table.rows.map((row, ri) => (
                        <tr key={ri}>
                            {row.cells.map((cell, ci) => (
                                <td
                                    key={ci}
                                    className={ci === 0 ? "font-semibold font-serif text-text-primary whitespace-nowrap" : ""}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
