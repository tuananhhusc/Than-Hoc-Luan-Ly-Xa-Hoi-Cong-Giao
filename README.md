# Thần Học Luân Lý Xã Hội Công Giáo

> Nền Tảng Kinh Viện, Tiến Trình Lịch Sử và Chuyển Hóa Thực Hành Tại Việt Nam

Một ứng dụng web tĩnh học thuật, tinh tế và tối ưu hóa trải nghiệm đọc văn bản dài, được xây dựng bằng **Next.js (App Router)** và **Tailwind CSS**. Dự án này trình bày một báo cáo nghiên cứu chuyên sâu về Học thuyết Xã hội của Giáo hội Công giáo (Catholic Social Teaching).

## 🌟 Điểm Nổi Bật Về Thiết Kế (Design Highlights)

Dự án được thiết kế với triết lý "Học thuật & Thánh thiêng", đảm bảo trải nghiệm đọc nghiêm túc, tập trung nhưng vẫn mang tính thẩm mỹ cao:

*   **Nghệ thuật Chữ (Typography):** 
    *   Sử dụng phông chữ **Merriweather** (Serif) cho các tiêu đề lớn, mang lại vẻ đẹp cổ điển, uy nghiêm và cứng cáp.
    *   Sử dụng phông chữ **Lora** (Serif) cho nội dung bài viết, được tinh chỉnh khoảng cách dòng (line-height) nhằm tối ưu hóa việc đọc các văn bản tiếng Việt dài mà không gây mỏi mắt.
    *   **Drop Cap:** Mở đầu mỗi phần bằng một chữ cái lớn (Drop Cap) màu Vàng Gold tĩnh tại, gợi nhớ đến các văn bản thần học kinh viện.
*   **Trích Dẫn Học Thuật (In-text Citations):** Tích hợp các con số chú thích (ví dụ: <sup>[1]</sup>) trực tiếp trong nội dung văn bản. Các chú thích này là những siêu liên kết mỏ neo (anchor links) cuộn mượt mà xuống phần Nguồn Trích Dẫn ở cuối trang.
*   **Mục Lục Thông Minh (Scroll-spy TOC):** Menu điều hướng dính (sticky) ở thanh bên (sidebar) tự động đánh dấu mục đang đọc dựa trên thao tác cuộn chuột. Hỗ trợ nút nổi (Floating action button) dành riêng cho giao diện di động.
*   **Tài Liệu Tham Khảo (APA Format):** Danh sách 57 nguồn tài liệu tham khảo được format chỉn chu theo chuẩn APA, tích hợp tính năng thu gọn/mở rộng giúp giao diện không bị choáng ngợp.
*   **Bảng Học Thuật (Academic Tables):** Bảng biểu được style rõ ràng, viền mỏng, màu nền tiêu đề nhạt, tập trung tuyệt đối vào dữ liệu.

## 🛠 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Ngôn Ngữ:** TypeScript
*   **Phông Chữ:** Google Fonts (`next/font/google` - Merriweather & Lora)
*   **Khác:** Lucide React (Icons)

## 📂 Cấu Trúc Thư Mục Chính

```text
d:\thanhocluanly
├── public/                 # Các tài nguyên tĩnh (images, icons)
├── src/
│   ├── app/
│   │   ├── globals.css     # Định nghĩa bộ màu hệ thống (Gold, Warm Gray) và CSS tùy chỉnh
│   │   ├── layout.tsx      # Root HTML cốt lõi, SEO Metadata, và cấu hình hai font chữ
│   │   └── page.tsx        # Cấu trúc lưới hai cột (TOC + Content)
│   ├── components/
│   │   ├── ContentSection.tsx   # Render nội dung đoạn văn, Drop Caps, và In-text Citations
│   │   ├── ContentTable.tsx     # Render bảng biểu học thuật
│   │   ├── Footer.tsx           # Chân trang với biểu tượng IHS
│   │   ├── Header.tsx           # Tiêu đề trang trọng
│   │   ├── References.tsx       # Component quản lý 57 tài liệu tham khảo
│   │   └── TableOfContents.tsx  # Component Client xử lý cuộn trang (IntersectionObserver)
│   └── lib/
│       ├── content.ts      # TOÀN BỘ dữ liệu văn bản được cấu trúc hóa dưới dạng object
│       └── types.ts        # Các interface TypeScript định nghĩa cấu trúc dữ liệu
└── tailwind.config.ts      # (Nếu xài Tailwind v3, đối với v4 cấu hình được đưa vào globals.css)
```

## 🚀 Hướng Dẫn Cài Đặt và Khởi Chạy Local

Bạn có thể chạy dự án này trực tiếp trên máy tính của mình bằng các bước sau:

1.  **Clone hoặc Tải Source Code về máy.**
2.  **Mở Terminal** tại thư mục gốc của dự án (`d:\thanhocluanly`).
3.  **Cài đặt các gói phụ thuộc (Dependencies):**
    ```bash
    npm install
    ```
4.  **Khởi chạy Server Development:**
    ```bash
    npm run dev
    ```
5.  **Thưởng thức kết quả:** Mở trình duyệt và truy cập vào địa chỉ [http://localhost:3000](http://localhost:3000).

## 📝 Quản Lý Nội Dung

Toàn bộ nội dung của bài viết, mục lục và danh sách tài liệu tham khảo không bị hard-code (viết chết) vào các file giao diện. Thay vào đó, tất cả được tách bạch hợp lý tại file `src/lib/content.ts`.

Nếu bạn muốn chỉnh sửa, thêm hoặc bớt các đoạn văn, tiêu đề hay tài liệu tham khảo, bạn chỉ cần thay đổi dữ liệu trong file `content.ts`. Component `ContentSection` và `References` sẽ tự động parse (phân tích) trích dẫn dạng `[1]`, `[2]` để biến chúng thành HTML chuẩn học thuật.

---

*Dự án tạo ra với mục đích phục vụ nghiên cứu và lan tỏa Học thuyết Xã hội Công giáo dưới một giao diện đẹp mắt, dễ tiếp cận và tôn trọng người học.*
