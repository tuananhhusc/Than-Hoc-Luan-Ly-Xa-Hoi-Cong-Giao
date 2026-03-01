export default function Header() {
    return (
        <header className="relative bg-white pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
            {/* Subtle decorative background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, #d4af37 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, #d4af37 1px, transparent 1px)`,
                        backgroundSize: "120px 120px",
                    }}
                />
            </div>

            <div className="relative max-w-3xl mx-auto px-6 text-center">
                {/* Small cross accent */}
                <div className="text-gold text-2xl mb-6 tracking-widest font-serif select-none">
                    ✝
                </div>

                <h1 className="font-serif text-3xl md:text-[2.5rem] leading-tight font-bold text-text-primary mb-6 tracking-tight">
                    Thần Học Luân Lý Xã Hội Công Giáo
                </h1>

                <p className="font-serif text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
                    Nền Tảng Kinh Viện, Tiến Trình Lịch Sử
                    <br className="hidden md:block" /> và Chuyển Hóa Thực Hành Tại Việt
                    Nam
                </p>

                {/* Gold divider */}
                <div className="gold-divider mb-8" />

                {/* Academic label */}
                <p className="text-xs tracking-[0.2em] uppercase text-text-secondary/70 font-sans">
                    Nghiên Cứu Chuyên Đề
                </p>
            </div>
        </header>
    );
}
