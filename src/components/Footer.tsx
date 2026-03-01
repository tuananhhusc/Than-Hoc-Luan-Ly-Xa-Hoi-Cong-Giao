export default function Footer() {
    return (
        <footer className="bg-bg-warm border-t border-border-subtle mt-20">
            <div className="max-w-3xl mx-auto px-6 py-12 text-center">
                {/* Gold divider */}
                <div className="gold-divider mb-8" />

                {/* IHS Monogram */}
                <p className="font-serif text-xl text-gold mb-4 tracking-[0.15em] select-none">
                    ☩ IHS ☩
                </p>

                <p className="text-sm text-text-secondary/70 mb-2 font-sans">
                    Ad Maiorem Dei Gloriam
                </p>

                <p className="text-xs text-text-secondary/50 font-sans">
                    © {new Date().getFullYear()} · Nghiên Cứu Thần Học Luân Lý Xã Hội
                    Công Giáo
                </p>
            </div>
        </footer>
    );
}
