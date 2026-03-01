import { documentData } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import TableOfContents from "@/components/TableOfContents";
import References from "@/components/References";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[250px_1fr]">
          {/* Sidebar TOC */}
          <div className="hidden lg:block">
            <TableOfContents items={documentData.tocItems} />
          </div>

          {/* Main content */}
          <main className="max-w-[800px] py-12">
            {documentData.sections.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}

            <References references={documentData.references} />
          </main>
        </div>
      </div>

      {/* Mobile TOC (rendered at body level for overlay) */}
      <div className="lg:hidden">
        <TableOfContents items={documentData.tocItems} />
      </div>

      <Footer />
    </div>
  );
}
