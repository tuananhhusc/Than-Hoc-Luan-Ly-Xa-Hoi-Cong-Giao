import type { Metadata } from "next";
import { Merriweather, Lora } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thần Học Luân Lý Xã Hội Công Giáo",
  description:
    "Nền Tảng Kinh Viện, Tiến Trình Lịch Sử và Chuyển Hóa Thực Hành Tại Việt Nam — Nghiên cứu chuyên sâu về Học thuyết Xã hội của Giáo hội Công giáo.",
  keywords: [
    "Thần học Luân lý",
    "Công giáo",
    "Catholic Social Teaching",
    "Học thuyết Xã hội",
    "Việt Nam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${merriweather.variable} ${lora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
