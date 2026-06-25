import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Split content into blocks based on double newlines
  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="prose max-w-none text-text-muted text-sm sm:text-base leading-relaxed flex flex-col gap-6 font-light">
      {blocks.map((block, blockIndex) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Headers
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={blockIndex} className="font-heading font-bold text-lg sm:text-xl text-text-dark mt-4 mb-1">
              {trimmed.substring(4)}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={blockIndex} className="font-heading font-bold text-xl sm:text-2xl text-text-dark mt-6 mb-2 border-b border-border pb-2">
              {trimmed.substring(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h1 key={blockIndex} className="font-heading font-extrabold text-2xl sm:text-3xl text-text-dark mt-8 mb-4">
              {trimmed.substring(2)}
            </h1>
          );
        }

        // 2. Horizontal Rule
        if (trimmed === "---") {
          return <hr key={blockIndex} className="border-t border-border/60 my-4" />;
        }

        // 3. Unordered Lists
        if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
          const items = trimmed
            .split(/\n/)
            .map((item) => item.replace(/^[*-\s]+/, "").trim())
            .filter(Boolean);

          return (
            <ul key={blockIndex} className="list-disc pl-6 flex flex-col gap-2.5 my-2">
              {items.map((item, itemIndex) => {
                // Parse bold text in list items
                const parts = parseInlineMarkdown(item);
                return (
                  <li key={itemIndex} className="text-text-muted text-xs sm:text-sm leading-relaxed">
                    {parts}
                  </li>
                );
              })}
            </ul>
          );
        }

        // 4. Ordered Lists (e.g. 1. , 2. )
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split(/\n/)
            .map((item) => item.replace(/^\d+\.[\s]+/, "").trim())
            .filter(Boolean);

          return (
            <ol key={blockIndex} className="list-decimal pl-6 flex flex-col gap-2.5 my-2">
              {items.map((item, itemIndex) => {
                const parts = parseInlineMarkdown(item);
                return (
                  <li key={itemIndex} className="text-text-muted text-xs sm:text-sm leading-relaxed">
                    {parts}
                  </li>
                );
              })}
            </ol>
          );
        }

        // 5. Tables
        if (trimmed.includes("|") && trimmed.split("\n")[1]?.includes("-")) {
          const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
          const headers = lines[0]
            .split("|")
            .map((h) => h.trim())
            .filter((h, i, arr) => i > 0 && i < arr.length - 1);
          
          const rows = lines
            .slice(2) // skip header and separator lines
            .map((row) =>
              row
                .split("|")
                .map((cell) => cell.trim())
                .filter((_, i, arr) => i > 0 && i < arr.length - 1)
            );

          return (
            <div key={blockIndex} className="overflow-x-auto border border-border/40 rounded-lg shadow-sm bg-white my-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-custom/60 border-b border-border/35">
                    {headers.map((header, idx) => (
                      <th key={idx} className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-text-dark border-r last:border-r-0 border-border/30">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-border/20 last:border-b-0 odd:bg-background-custom/10">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-5 py-3.5 text-xs text-text-muted border-r last:border-r-0 border-border/20">
                          {parseInlineMarkdown(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // 6. Paragraphs (Standard Text)
        return (
          <p key={blockIndex} className="text-sm sm:text-base text-text-muted leading-relaxed font-light">
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Helper to parse bold (**text**) and highlight inline markdown elements into React nodes.
 */
function parseInlineMarkdown(text: string): React.ReactNode[] {
  // Regex to match **bold**
  const regex = /(\*\*.*?\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-text-dark">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
