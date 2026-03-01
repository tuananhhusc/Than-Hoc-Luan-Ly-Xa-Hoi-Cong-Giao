import { DocumentData } from "./types";

export const documentData: DocumentData = {
    title: "Thần Học Luân Lý Xã Hội Công Giáo: Nền Tảng Kinh Viện, Tiến Trình Lịch Sử và Chuyển Hóa Thực Hành Tại Việt Nam",
    tocItems: [
        { id: "nhap-de", title: "I. Nhập Đề" },
        {
            id: "nen-tang",
            title: "II. Nền Tảng Thần Học Cơ Bản",
            children: [
                { id: "pham-gia", title: "2.1 Phẩm Giá Con Người" },
                { id: "cong-ich", title: "2.2 Công Ích" },
                { id: "lien-doi-bo-tro", title: "2.3 Tình Liên Đới và Tính Bổ Trợ" },
            ],
        },
        { id: "nguyen-tac-phai-sinh", title: "III. Các Nguyên Tắc Phái Sinh" },
        { id: "tien-trinh-lich-su", title: "IV. Tiến Trình Lịch Sử" },
        {
            id: "ung-dung-duong-dai",
            title: "V. Ứng Dụng Đương Đại",
            children: [
                { id: "dao-duc-sinh-hoc", title: "5.1 Đạo Đức Sinh Học" },
                { id: "di-dan", title: "5.2 Vấn Đề Di Dân" },
                { id: "tri-tue-nhan-tao", title: "5.3 Trí Tuệ Nhân Tạo" },
            ],
        },
        {
            id: "viet-nam",
            title: "VI. Thần Học tại Việt Nam",
            children: [
                { id: "di-san-lich-su", title: "6.1 Di Sản Lịch Sử" },
                { id: "bac-ai-xa-hoi", title: "6.2 Bác Ái Xã Hội & Sứ Mạng Caritas" },
                { id: "sinh-thai-toan-dien", title: "6.3 Sinh Thái Toàn Diện" },
                { id: "khong-gian-ky-thuat-so", title: "6.4 Không Gian Kỹ Thuật Số" },
            ],
        },
        { id: "tong-ket", title: "VII. Tổng Kết" },
        { id: "nguon-trich-dan", title: "VIII. Tài Liệu Tham Khảo (APA)" },
    ],
    sections: [
        {
            id: "nhap-de",
            title: "I. Nhập Đề: Bản Chất, Nguồn Gốc và Sự Định Hình Của Thần Học Luân Lý Xã Hội",
            paragraphs: [
                "Thần học Luân lý Xã hội, thường được biết đến qua thuật ngữ kinh điển \"Học thuyết Xã hội của Giáo hội Công giáo\" (Catholic Social Teaching - CST), không cấu thành một hệ tư tưởng chính trị, một học thuyết kinh tế học thuần túy hay một mô hình kỹ trị giải quyết các vấn đề vĩ mô. [1] Khởi đi từ cốt lõi, đây là một chuyên ngành thần học sâu sắc, phản ánh sự suy tư triết học, đạo đức học và thần học của Giáo hội về các thực tại phức tạp của đời sống con người trong xã hội. Dựa trên nền tảng Mặc khải Thánh Kinh, truyền thống Giáo phụ, và lý trí tự nhiên, Thần học Luân lý Xã hội cung cấp một la bàn luân lý định hướng cho hành vi của cá nhân và cấu trúc của các thể chế, nhằm mục đích tối hậu là xây dựng một trật tự xã hội công bằng, hòa bình và tôn trọng tuyệt đối phẩm giá con người. [2]",
                "Sự ra đời và phát triển của Thần học Luân lý Xã hội đánh dấu một bước chuyển dịch mang tính hệ hình (paradigm shift) trong tư duy đạo đức học Công giáo. Thay vì chỉ tập trung vào việc đánh giá và cứu rỗi cá nhân khỏi các \"tội lỗi cá nhân\" (personal sins), luân lý xã hội chuyển trọng tâm sang việc phân tích, nhận diện và nỗ lực tái cấu trúc các \"tội lỗi cơ cấu\" (structural sins). [3] Tội lỗi cơ cấu được hiểu là những thể chế chính trị, cấu trúc pháp lý, hoặc hệ thống kinh tế bất công đã được thể chế hóa, qua đó làm xói mòn nhân phẩm, tước đoạt quyền lợi hợp pháp và áp bức những người yếu thế trong xã hội.",
                "Năm 2004, dưới sự lãnh đạo và tầm nhìn xa trông rộng của Đức cố Hồng y Phanxicô Xaviê Nguyễn Văn Thuận, Hội đồng Tòa Thánh về Công lý và Hòa bình đã xuất bản bản Tóm lược Học thuyết Xã hội của Giáo hội Công giáo (Compendium of the Social Doctrine of the Church). Tác phẩm vĩ đại này đã hệ thống hóa toàn bộ kho tàng giáo huấn xã hội từ quá khứ đến hiện tại thành một cấu trúc thần học chặt chẽ gồm 12 chương, tạo ra một khung quy chiếu thần học và hành động toàn diện cho người Công giáo cũng như những người có thiện chí. [7]",
            ],
        },
        {
            id: "nen-tang",
            title: "II. Nền Tảng Thần Học Cơ Bản: Bốn Trụ Cột Của Trật Tự Xã Hội Công Giáo",
            paragraphs: [
                "Sự chặt chẽ về mặt triết học và thần học của Luân lý Xã hội Công giáo được neo giữ trên một hệ thống các nguyên tắc bất biến. Các nguyên tắc này không tồn tại độc lập mà đan xen, làm tiền đề và bổ trợ cho nhau. Bản Tóm lược Học thuyết Xã hội của Giáo hội Công giáo đã xác định bốn nguyên tắc nền tảng tuyệt đối, đóng vai trò như bốn trụ cột chống đỡ toàn bộ tòa nhà tư tưởng xã hội Công giáo, bao gồm: Phẩm giá con người, Công ích, Tính Bổ trợ và Tình Liên đới.",
            ],
            subsections: [
                {
                    id: "pham-gia",
                    title: "2.1 Phẩm Giá Con Người (Human Dignity)",
                    paragraphs: [
                        "Nguyên tắc tiên quyết, nền tảng và là suối nguồn của mọi giáo huấn xã hội Công giáo chính là sự tôn trọng vô điều kiện đối với phẩm giá con người. [3] Dưới lăng kính thần học, con người không phải là một sản phẩm ngẫu nhiên của các quá trình sinh học vô minh, cũng không phải là một bánh răng trong cỗ máy nhà nước. Con người được tạo dựng theo \"hình ảnh và giống như Thiên Chúa\" (imago Dei), do đó, mỗi cá nhân sở hữu một giá trị tự tại, thiêng liêng và bất khả xâm phạm ngay từ khoảnh khắc thụ thai cho đến khi chết tự nhiên. [2]",
                        "Sự bảo vệ phẩm giá con người trở thành thước đo duy nhất và tối hậu cho tính chính danh của mọi thể chế. Bất kỳ thể chế chính trị, luật pháp hay cấu trúc kinh tế nào cũng phải được đo lường bằng một tiêu chí duy nhất: chúng đang đe dọa, hạ thấp hay đang nâng đỡ sự sống và phẩm giá của con người. [3]",
                    ],
                },
                {
                    id: "cong-ich",
                    title: "2.2 Công Ích (The Common Good)",
                    paragraphs: [
                        "Sự thấu hiểu về phẩm giá con người tất yếu dẫn đến việc xác lập nguyên tắc thứ hai: Công ích. Con người không chỉ là những cá thể thiêng liêng mà còn là những hữu thể mang bản tính xã hội sâu sắc. [3] Công ích được định nghĩa là tổng thể những điều kiện của đời sống kinh tế, chính trị, pháp lý và văn hóa xã hội cho phép các tập thể và mỗi thành viên cá nhân có thể đạt tới sự hoàn thiện của mình một cách trọn vẹn và dễ dàng hơn. [2]",
                        "Một khía cạnh cốt lõi của Công ích là khái niệm \"mục đích phổ quát của tài sản\" (universal destination of goods). Dựa trên sách Lêvi, Giáo hội dạy rằng trái đất và mọi thụ tạo trên đó thuộc về Thiên Chúa và được ban cho toàn thể nhân loại để duy trì sự sống của mọi người. [3] Quyền sở hữu tư nhân luôn phải phục tùng nguyên tắc mục đích phổ quát của tài sản; nghĩa là của cải thặng dư của người giàu có thuộc về người nghèo đang trong cơn túng quẫn. [3]",
                    ],
                },
                {
                    id: "lien-doi-bo-tro",
                    title: "2.3 Tình Liên Đới (Solidarity) và Tính Bổ Trợ (Subsidiarity)",
                    paragraphs: [
                        "Đây là cặp nguyên tắc mang tính đối trọng và bổ sung cho nhau, duy trì sự cân bằng tinh tế của cấu trúc xã hội loài người. [5] Sự thiếu hụt một trong hai nguyên tắc này sẽ dẫn đến các hình thái xã hội méo mó: thiếu Tính Bổ trợ sẽ sinh ra chủ nghĩa tập thể độc đoán, trong khi thiếu Tình Liên đới sẽ sinh ra chủ nghĩa cá nhân ích kỷ.",
                        "Tình Liên Đới là một quyết tâm luân lý mạnh mẽ, bền vững và kiên định nhằm dấn thân cho công ích, bởi vì tất cả chúng ta đều thuộc về nhau và chịu trách nhiệm về tất cả mọi người. [2] Tính Bổ Trợ bảo vệ sự tự do, phẩm giá cá nhân và các cộng đồng nhỏ khỏi sự can thiệp, kiểm soát và nuốt chửng của nhà nước trung ương hoặc các thế lực kinh tế vĩ mô. [3]",
                    ],
                },
            ],
            table: {
                headers: ["Cấu Trúc Nguyên Tắc", "Đặc Tính Triết Học & Thần Học Luân Lý", "Ứng Dụng Trong Cấu Trúc Xã Hội"],
                rows: [
                    { cells: ["Phẩm giá Con người", "Imago Dei. Con người là cứu cánh, có giá trị nội tại tuyệt đối không phụ thuộc vào năng lực hay tài sản.", "Từ chối mọi chính sách chà đạp nhân quyền, bảo vệ sự sống từ lúc thụ thai đến khi chết tự nhiên. [2]"] },
                    { cells: ["Công Ích", "Điều kiện tổng thể cho phép mọi cá nhân đạt đến sự hoàn thiện. Tài sản có mục đích phổ quát.", "Phân phối lại tài sản hợp lý, xây dựng cơ sở hạ tầng, y tế và giáo dục phổ cập."] },
                    { cells: ["Tình Liên Đới", "Quyết tâm luân lý kiên định vì lợi ích của người khác. Nhận thức sự tương thuộc của nhân loại.", "Các chính sách viện trợ quốc tế, bảo vệ người nhập cư, chống lại phân biệt chủng tộc."] },
                    { cells: ["Tính Bổ Trợ", "Bảo vệ cấu trúc xã hội từ dưới lên. Cấp vĩ mô không được tước đoạt chức năng của cấp vi mô.", "Khuyến khích xã hội dân sự, tổ chức phi chính phủ, bảo vệ gia đình."] },
                ],
            },
        },
        {
            id: "nguyen-tac-phai-sinh",
            title: "III. Các Nguyên Tắc Phái Sinh Và Chiều Kích Thực Hành Trong Kinh Tế Xã Hội",
            paragraphs: [
                "Sự Ưu Tiên cho Người Nghèo và Dễ Bị Tổn Thương (Preferential Option for the Poor) là một nguyên tắc sắc bén để đánh giá bản chất đạo đức của một quốc gia. Thần học luân lý chỉ ra rằng một phép thử cơ bản đối với bất kỳ xã hội nào là cách thức xã hội đó đối xử với những thành viên nghèo khổ và yếu thế nhất của nó. [3] Nhu cầu sinh tồn của người nghèo phải được đặt cao hơn khát vọng làm giàu của người giàu.",
                "Khía cạnh thứ hai là Phẩm giá của Lao động và Quyền của Người Lao động. [2] Lao động được định nghĩa một cách sâu sắc là sự tham gia liên tục vào công trình sáng tạo của Thiên Chúa. [3] Nền kinh tế phải phục vụ con người, không phải con người bị vắt kiệt để phục vụ cho sự tăng trưởng vô hồn của nền kinh tế. [3]",
                "Nguyên tắc Chăm sóc Công trình Sáng tạo (Stewardship of Creation) định hình lại mối quan hệ giữa con người và thế giới tự nhiên. Thiên nhiên không phải là một kho tài nguyên vô tận vô tri để khai thác bừa bãi, mà là \"ngôi nhà chung\" cần được bảo vệ.",
            ],
        },
        {
            id: "tien-trinh-lich-su",
            title: "IV. Tiến Trình Lịch Sử Của Huấn Quyền Xã Hội",
            paragraphs: [
                "Khởi đi từ Cách mạng Công nghiệp, hệ thống các Thông điệp Xã hội (Social Encyclicals) do các vị Giáo hoàng ban hành đã tạo thành một thân thể giáo lý vĩ đại phản ứng lại các biến động chấn động của lịch sử nhân loại.",
            ],
            table: {
                headers: ["Văn Kiện (Năm)", "Tác Giả", "Trọng Tâm Phân Tích Luân Lý Xã Hội"],
                rows: [
                    { cells: ["Rerum Novarum (1891)", "Giáo hoàng Lêô XIII", "Bảo vệ quyền của công nhân, lên án sự bóc lột của chủ nghĩa tư bản tự do và bác bỏ tư tưởng đấu tranh giai cấp."] },
                    { cells: ["Quadragesimo Anno (1931)", "Giáo hoàng Piô XI", "Phê phán sự độc quyền quyền lực kinh tế toàn cầu sau Đại suy thoái. Củng cố nguyên tắc Bổ trợ."] },
                    { cells: ["Gaudium et Spes (1965)", "Công đồng Vatican II", "Tái định vị Giáo hội không đứng ngoài thế giới mà đồng hành, chia sẻ niềm vui, nỗi buồn của nhân loại."] },
                    { cells: ["Populorum Progressio (1967)", "Giáo hoàng Phaolô VI", "Khẳng định: \"Phát triển là tên gọi mới của hòa bình\". Lên án sự bất công toàn cầu."] },
                    { cells: ["Centesimus Annus (1991)", "Giáo hoàng Gioan Phaolô II", "Vạch trần sự thất bại của kinh tế kế hoạch tập trung và cảnh báo sự sùng bái thị trường của chủ nghĩa tư bản vô luân."] },
                    { cells: ["Laudato Si' (2015)", "Giáo hoàng Phanxicô", "Xây dựng thần học sinh thái toàn diện, lập luận khủng hoảng môi trường và bần cùng hóa xã hội có chung một gốc rễ."] },
                    { cells: ["Fratelli Tutti (2020)", "Giáo hoàng Phanxicô", "Bản thiết kế thế giới hậu đại dịch, lên án chủ nghĩa dân tộc cực đoan, xây dựng nền chính trị bác ái."] },
                ],
            },
        },
        {
            id: "ung-dung-duong-dai",
            title: "V. Ứng Dụng Thần Học Luân Lý Xã Hội Vào Các Thách Thức Toàn Cầu Đương Đại",
            paragraphs: [
                "Khả năng sống động của Thần học Luân lý Xã hội Công giáo không nằm ở sự cố chấp duy trì các công thức quá khứ, mà ở khả năng giải mã và đưa ra định hướng đạo đức cho các hiện tượng chưa từng có trong kỷ nguyên mới.",
            ],
            subsections: [
                {
                    id: "dao-duc-sinh-hoc",
                    title: "5.1 Đạo Đức Sinh Học và Luân Lý Nhất Quán Về Sự Sống",
                    paragraphs: [
                        "Mọi nguyên tắc luân lý xã hội về kinh tế, chính trị hay lao động sẽ lập tức sụp đổ nếu sinh mạng con người - nền tảng của mọi quyền lợi - không được bảo vệ từ lúc thụ thai cho đến cái chết tự nhiên. Luân lý xã hội khẳng định tính sai trái tuyệt đối của phá thai và an tử (euthanasia).",
                        "CST vạch trần giới hạn của đạo đức sinh học tự do (secular bioethics) hiện đại, vốn thường bị ám ảnh quá mức vào \"quyền tự quyết cá nhân\" mà phớt lờ các chiều kích cộng đồng. [22] Đạo đức y sinh phải mở rộng để bao hàm cả tính dễ bị tổn thương, trách nhiệm xã hội và tình liên đới.",
                    ],
                },
                {
                    id: "di-dan",
                    title: "5.2 Vấn Đề Di Dân, Quyền Tị Nạn và Biên Giới Quốc Gia",
                    paragraphs: [
                        "Con người có quyền thiết yếu được ở lại quê hương mình. Tuy nhiên, khi điều này trở nên bất khả thi do sự đàn áp hoặc nghèo đói, họ sở hữu quyền tự nhiên trong việc di cư ra khỏi biên giới quốc gia để tìm kiếm sự an toàn. Ở chiều ngược lại, các nhà nước có quyền chủ quyền kiểm soát dòng chảy di cư.",
                        "Việc viện dẫn \"chủ quyền quốc gia\" để đóng sầm cánh cửa trước mặt những người tị nạn đang trong cơn nguy khốn là một sự sụp đổ về mặt đạo đức. [27] Con người di cư không bao giờ là \"một vấn đề cần giải quyết\", mà trước hết là \"một con người cần được bảo vệ\".",
                    ],
                },
                {
                    id: "tri-tue-nhan-tao",
                    title: "5.3 Trí Tuệ Nhân Tạo (AI) và Sự Bành Trướng Của Quyền Lực Kỹ Thuật Số",
                    paragraphs: [
                        "Sự trỗi dậy của AI không chỉ là một hiện tượng kỹ thuật; nó đang âm thầm cấu trúc lại nhận thức của con người về bản thân. Dù máy móc tiến bộ đến mức nào, chúng không bao giờ sở hữu linh hồn hay lương tâm đạo đức. AI phải luôn là một công cụ phục vụ sự thăng tiến của nhân loại.",
                        "Giáo hội cảnh báo về Chủ nghĩa Thực dân Kỹ thuật số (Digital Colonialism). Mô hình hiện tại, trong đó các tập đoàn xuyên quốc gia thu thập dữ liệu từ các quốc gia nghèo để làm giàu cho một nhóm tinh hoa, là một cấu trúc bóc lột mới cần bị tháo dỡ. [32]",
                    ],
                },
            ],
        },
        {
            id: "viet-nam",
            title: "VI. Thần Học Luân Lý Xã Hội Tại Việt Nam: Hành Trình Lịch Sử và Chuyển Hóa Hiện Tại",
            paragraphs: [
                "Việc đưa Thần học Luân lý Xã hội Công giáo vào thực hành tại Việt Nam là một sự cọ xát thực tế đầy sinh động giữa một cộng đồng thiểu số (chiếm khoảng 6,5-7% dân số, khoảng gần 6 triệu tín hữu) với bối cảnh phức tạp của quốc gia trong tiến trình hội nhập kinh tế toàn cầu sâu rộng. [35]",
            ],
            subsections: [
                {
                    id: "di-san-lich-su",
                    title: "6.1 Di Sản Lịch Sử và Bản Hiến Chương Mục Vụ 1980",
                    paragraphs: [
                        "Bước ngoặt mang tính cách mạng nhất trong nhận thức luân lý xã hội của Công giáo Việt Nam thời hiện đại chính là sự ra đời của Thư Chung của Hội đồng Giám mục Việt Nam năm 1980. [37]",
                        "Được công bố trong bối cảnh đất nước vừa trải qua biến cố thống nhất, Thư Chung 1980 đã dũng cảm vạch ra một đường lối mục vụ cốt lõi: \"Sống Phúc Âm giữa lòng dân tộc để phục vụ hạnh phúc của đồng bào\". Đường hướng này đã trực tiếp xóa rào cản luân lý, yêu cầu người Công giáo Việt Nam đồng hành và gắn bó vận mệnh của mình với dân tộc.",
                    ],
                },
                {
                    id: "bac-ai-xa-hoi",
                    title: "6.2 Sứ Mạng Bác Ái Xã Hội và Caritas Việt Nam",
                    paragraphs: [
                        "Sự chuyển hóa các nguyên tắc Thần học Luân lý Xã hội thành hành động được minh chứng rõ nét qua cấu trúc hoạt động xã hội của Giáo hội địa phương, đặc biệt thông qua mạng lưới rộng khắp của Caritas Việt Nam tại toàn bộ 27 giáo phận.",
                        "Hành động chăm sóc y tế và người yếu thế là tâm điểm. Theo thống kê nhiệm kỳ 2015-2020, mạng lưới tín hữu đã tổ chức hàng chục đợt khám chữa bệnh lưu động chuyên sâu, phẫu thuật chỉnh hình và mổ mắt trả lại ánh sáng cho hàng trăm người, đồng thời cung cấp bảo hiểm y tế và chăm sóc lâu dài cho gần 36.000 lượt bệnh nhân nghèo. [55] Ngân sách hàng chục tỷ đồng được huy động hoàn toàn từ sự đóng góp tự nguyện nhằm ưu tiên những người dễ bị tổn thương nhất.",
                        "Trong lĩnh vực giáo dục và kiến tạo công ích, đồng bào Công giáo không ngừng đóng góp hàng tỷ đồng mỗi năm để xây dựng các hạng mục trường học và cơ sở vật chất ở vùng sâu vùng xa. Đặc biệt, theo ghi nhận của Ủy ban Mặt trận Tổ quốc trong giai đoạn 2017-2022, cộng đồng Công giáo đã quyên góp hơn 2.013 tỷ đồng cho các quỹ từ thiện, an sinh xã hội quốc gia, xóa đói giảm nghèo bền vững và phát triển nông thôn mới. [57]",
                    ],
                },
                {
                    id: "sinh-thai-toan-dien",
                    title: "6.3 Sinh Thái Toàn Diện: Khủng Hoảng và Sự Phản Kháng Luân Lý",
                    paragraphs: [
                        "Nguyên tắc \"Chăm sóc công trình sáng tạo\" đã được thử thách gay gắt vào năm 2016 với thảm họa sinh thái do nhà máy thép Formosa gây ra tại miền Trung, làm hàng triệu ngư dân lao đao.",
                        "Dưới ánh sáng thông điệp Laudato Si', các cộng đồng Công giáo đã được dẫn dắt bởi lương tâm đi đầu trong việc đòi hỏi công lý phân phối và bảo vệ quyền mưu sinh của người nghèo. Cuộc khủng hoảng là một minh chứng đẫm nước mắt cho thấy cái giá của việc thực thi luân lý xã hội trong việc bảo vệ môi trường sinh thái.",
                    ],
                },
                {
                    id: "khong-gian-ky-thuat-so",
                    title: "6.4 Thách Thức Trong Không Gian Kỹ Thuật Số",
                    paragraphs: [
                        "Tiến vào thời đại 4.0, sự trỗi dậy của công nghệ số đặt ra một chiến trường luân lý xã hội mới. Dưới lăng kính CST, sự minh bạch, quyển tự do biểu đạt ôn hòa và quyền tiếp cận thông tin đa chiều là những khía cạnh thiết yếu cấu thành phẩm giá con người.",
                        "Người Công giáo được kêu gọi không trốn tránh khỏi môi trường số, mà phải nỗ lực định hình lại nó, đấu tranh để không gian mạng trở thành nơi nuôi dưỡng sự thật và bảo vệ nhân quyền, thay vì một đại lộ bị theo dõi và bóp méo thông tin.",
                    ],
                },
            ],
        },
        {
            id: "tong-ket",
            title: "VII. Tổng Kết",
            paragraphs: [
                "Thần học Luân lý Xã hội Công giáo cung cấp cho nhân loại một lăng kính giải phẫu cực kỳ sắc bén để mổ xẻ các cấu trúc phức tạp và những căn bệnh trầm kha của xã hội đương đại. Nó lên án sự bóc lột của chủ nghĩa tư bản tân tự do, đồng thời cũng kiên quyết loại bỏ chủ nghĩa tập thể áp bức. [12]",
                "Tại môi trường đặc thù như Việt Nam, Thần học Luân lý Xã hội không thể và không nên bị giới hạn thành những trang sách lý thuyết trong thư viện. Nó phải tiếp tục là một thực thể sống động, đang vật lộn và đấu tranh mỗi ngày để duy trì sự cân bằng giữa lý tưởng \"Sống Phúc Âm giữa lòng dân tộc\" và thực tại khốc liệt của việc bảo vệ sinh môi và công lý. [38]",
            ],
        },
    ],
    references: [
    "T\u00f3m L\u01b0\u1ee3c 7 Nguy\u00ean T\u1eafc v\u1ec1 H\u1ecdc Thuy\u1ebft X\u00e3 H\u1ed9i C\u00f4ng gi\u00e1o - The Valley Catholic, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://thevalleycatholic.org/seven-principles-social-justice-vietnamese",
    "7 Catholic social teaching principles - CAFOD, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://cafod.org.uk/pray/catholic-social-teaching",
    "Seven Themes of Catholic Social Teaching - USCCB.org, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/beliefs-and-teachings/what-we-believe/catholic-social-teaching/seven-themes-of-catholic-social-teaching",
    "Lessons from the Vatican's AI Guidelines - Word on Fire - WordOnFire.org, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.wordonfire.org/articles/lessons-from-the-vaticans-ai-guidelines/",
    "Principles of Catholic Social Teaching - Seton Hall University, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.shu.edu/micah-business-economics/principles-of-catholic-social-teaching.html",
    "Themes of Catholic Social Teaching | USCCB, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/resources/themes-catholic-social-teaching",
    "T\u00d3M L\u01af\u1ee2C H\u1eccC THUY\u1ebeT X\u00c3 H\u1ed8I C\u1ee6A GI\u00c1O H\u1ed8I C\u00d4NG GI\u00c1O \u2013 Xu\u00e2n B\u00edch Vi\u1ec7t Nam, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, http://xuanbichvietnam.net/trangchu/tom-luoc-hoc-thuyet-xa-hoi-cua-giao-hoi-cong-giao/",
    "Catholic social teaching - Wikipedia, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://en.wikipedia.org/wiki/Catholic_social_teaching",
    "Four Principles of Catholic Social Teaching | Virginia Catholic Conference, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://vacatholic.org/fourprinciples/",
    "10 Principles of Catholic Social Teaching, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://stmikes.utoronto.ca/wp-content/uploads/2020/07/180-Catholic-Teaching-v2.pdf",
    "Life and Dignity of the Human Person - USCCB.org, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/beliefs-and-teachings/what-we-believe/catholic-social-teaching/life-and-dignity-of-the-human-person",
    "TI\u1ebeN TR\u00ccNH H\u00ccNH TH\u00c0NH H\u1eccC THUY\u1ebeT X\u00c3 H\u1ed8I C\u00d4NG GI\u00c1O, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://giaophandalat.com/tien-trinh-hinh-thanh-hoc-thuyet-xa-hoi-cong-giao.html",
    "Catholic Social Thought on Migration | Jesuit Refugee Service/USA, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.jrsusa.org/catholic-social-teaching-migration/",
    "Foundational Documents of Catholic Social Teaching - Archdiocese of Santa Fe, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://archdiosf.org/foundational-documents-of-catholic-social-teaching",
    "B\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng - caritas vi\u1ec7t nam, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://caritasvietnam.org/bao-ve-moi-truong",
    "Catholic Social Teaching | Justice and Peace Office, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://justiceandpeace.org.au/home/resources/catholic-social-teaching/",
    "Foundational Documents of CST - USCCB.org, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/beliefs-and-teachings/what-we-believe/catholic-social-teaching/foundational-documents",
    "The Papal Encyclicals Online, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.papalencyclicals.net/",
    "Catholic Teaching on Immigration, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://catholicstand.com/catholic-teaching-on-immigration/",
    "S\u1ed0NG TINH TH\u1ea6N LAUDATO S\u00cd V\u00c0 FRATELLI TUTTI - T\u1ec9nh D\u00f2ng Ng\u00f4i L\u1eddi Vi\u1ec7t Nam, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://ngoiloivn.net/dong-ngoi-loi/ngoi-loi-viet-nam/cong-ly-va-hoa-binh/ls-ft/",
    "TH\u00d4NG \u0110I\u1ec6P FRATELLI TUTTI V\u1ec0 T\u00ccNH HUYNH \u0110\u1ec6 V\u00c0 T\u00ccNH B\u1eb0NG H\u1eeeU X\u00c3 H\u1ed8I, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://hdgmvietnam.com/chi-tiet/thong-diep-fratelli-tutti-ve-tinh-huynh-de-va-tinh-bang-huu-xa-hoi-41849",
    "Catholic Bioethics and Social Justice - Liturgical Press, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://litpress.org/Products/8455/Catholic-Bioethics-and-Social-Justice",
    "St. James and Bioethics in the Public Square - PMC - NIH, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC6056806/",
    "Life & Dignity of the Human Person | Catholic Diocese of Pensacola-Tallahassee, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://ptdiocese.org/dignityofhumanlife",
    "truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC6056806/#:~:text=It's%20relatively%20easy%20to%20set,research%20destroys%20a%20human%20life.",
    "Catholic Social Teaching on Immigration and the Movement of Peoples - USCCB.org, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/issues-and-action/human-life-and-dignity/immigration/catholic-teaching-on-immigration-and-the-movement-of-peoples",
    "Borders Are Real, But So Are Human Lives: Applying Catholic Social Teaching to Contemporary Issues, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.smcvt.edu/about-smc/news/2026/february/borders-are-real-but-so-are-human-lives/",
    "Morality of AI depends on human choices, Vatican says in new document - USCCB.org, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/news/2025/morality-ai-depends-human-choices-vatican-says-new-document",
    "Bishops tackle ethical, human-centered use of AI in evangelization - Interaksyon, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://interaksyon.philstar.com/trends-spotlights/2026/01/28/308379/bishops-tackle-ethical-human-centered-use-of-ai-in-evangelization/",
    "Pope asks world's religions to push for ethical AI development | USCCB, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.usccb.org/news/2024/pope-asks-worlds-religions-push-ethical-ai-development",
    "Integrating Catholic Social Teaching with AI Ethics to Address Inequity in AI Healthcare, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://pubmed.ncbi.nlm.nih.gov/39312105/",
    "Maryland Bishops on the Use of Artificial Intelligence, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.mdcatholic.org/2025-pastoral-ai/",
    "Church called to take lead role in shaping ethical AI - Sunday Examiner, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.examiner.org.hk/2024/08/16/church-called-to-take-lead-role-in-shaping-ethical-ai/news/",
    "Surprise! Catholic Social Teaching Already Has a Lot to Say about AI, Experts Say - Archdiocese of New York, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.archny.org/posts/surprise-catholic-social-teaching-already-has-a-lot-to-say-about-ai-experts-say",
    "C\u00f4ng gi\u00e1o v\u00e0 d\u00e2n t\u1ed9c \u1edf n\u01b0\u1edbc ta trong b\u1ed1i c\u1ea3nh \u0111\u1ea5t n\u01b0\u1edbc qu\u00e1 \u0111\u1ed9 \u0111i l\u00ean ch\u1ee7 ngh\u0129a x\u00e3 h\u1ed9i (GS.TS \u0110\u1ed7 Quang H\u01b0ng) - Khoa L\u1ecbch s\u1eed, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://his.ussh.vnu.edu.vn/vi/news/bui-minh-hanh/cong-giao-va-dan-toc-o-nuoc-ta-trong-boi-canh-dat-nuoc-qua-do-di-len-chu-nghia-xa-hoi-5816.html",
    "Can Catholic Church and Vietnamese state finally coexist? - Asia Times, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://asiatimes.com/2025/12/can-catholic-church-and-vietnamese-state-finally-coexist/",
    "truy c\u1eadp v\u00e0o th\u00e1ng 1 1, 1970, https://hdgmvietnam.com/chi-tiet/thu-chung-nam-1980-cua-hoi-dong-giam-muc-viet-nam-43093",
    "Gi\u00e1o h\u1ed9i C\u00f4ng gi\u00e1o Vi\u1ec7t Nam v\u00e0 n\u1ed7 l\u1ef1c truy\u1ec1n gi\u00e1o 50 n\u0103m qua (3) - TGP S\u00c0I G\u00d2N, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://tgpsaigon.net/bai-viet/giao-hoi-cong-giao-viet-nam-va-no-luc-truyen-giao-50-nam-qua-3-41442",
    "T\u1ea3n m\u1ea1n v\u1ec1 Th\u01b0 Chung 1980 c\u1ee7a H\u1ed9i \u00d0\u1ed3ng Gi\u00e1m M\u1ee5c Vi\u1ec7t Nam - CGvDT, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, http://www.cgvdt.vn/cong-giao-viet-nam/tan-man-ve-thu-chung-1980-cua-hoi-dong-giam-muc-viet-nam_a11318",
    "HISTORY OF FORMATION AND CONTRIBUTION OF CARITAS PHU CUONG IN THE FIELD OF CHARITY TO BINH DUONG PROVINCE, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://tdmujournal.vn/uploads/paper/files/Nguyen-Van-Hiep.pdf",
    "Catholic community contributes greatly to national development - VOV World, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://vovworld.vn/en-US/spotlight/catholic-community-contributes-greatly-to-national-development-1239387.vov",
    "CARITAS VI\u1ec6T NAM: Kh\u00f3a T\u1eadp Hu\u1ea5n N\u00e2ng Cao Nh\u1eadn Th\u1ee9c B\u1ea3o V\u1ec7 M\u00f4i Tr\u01b0\u1eddng V\u00e0 Bi\u1ebfn \u0110\u1ed5i Kh\u00ed H\u1eadu Qua Th\u00f4ng \u0110i\u1ec7p LAUDATO SI, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://caritassaigon.vn/caritas-viet-nam-khoa-tap-huan-nang-cao-nhan-thuc-bao-ve-moi-truong-va-bien-doi-khi-hau-qua-thong-diep-laudato-si",
    "Catholic community in Ha Tinh province: A resource contributing to national development, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://en.baoquocte.vn/catholic-community-in-ha-tinh-province-a-resource-contributing-to-national-development-359389.html",
    "Di d\u00e2n - H\u1ed8I \u0110\u1ed2NG GI\u00c1M M\u1ee4C VI\u1ec6T NAM, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://hdgmvietnam.com/tin-tuc/di-dan",
    "C\u1eed Nh\u00e2n - H\u1ecdc Vi\u1ec7n C\u00f4ng Gi\u00e1o Vi\u1ec7t Nam, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://hocvienconggiao.edu.vn/dao-tao/cu-nhan/",
    "Ch\u01b0\u01a1ng tr\u00ecnh \u0111\u00e0o t\u1ea1o th\u1ea7n h\u1ecdc, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://thsedessapientiae.net/than-hoc/",
    "truy c\u1eadp v\u00e0o th\u00e1ng 1 1, 1970, https://hocviencongvinh.com/",
    "Caritas Vi\u1ec7t Nam: Ph\u00f3ng S\u1ef1 Nh\u00ecn L\u1ea1i 5 N\u0103m Th\u00f4ng \u0110i\u1ec7p Laudato Si, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://giaophanthanhhoa.net/bac-ai/caritas-viet-nam-phong-su-nhin-lai-5-nam-thong-diep-laudato-si-34095.html",
    "Assault on Catholic communities in Vinh Diocese, Vietnam Presentation by Tony Tran February 21, 2018 The environmental disaster, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://dvov.org/wp-content/uploads/2018/03/Assault-on-Catholic-communities-in-Vinh-Diocese-Summary-02-21-18.pdf",
    "Catholic Villagers in Vietnam Protest Lack of Compensation For Formosa Disaster, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.rfa.org/english/news/vietnam/catholic-villagers-in-vietnam-protest-lack-of-compensation-for-formosa-disaster-07032017144316.html",
    "\u201cVietnamese Catholics Protests over Environmental Issue: A Test for the State-Church Relationship\u201d by Chung Van Hoang and Terence Chong, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.iseas.edu.sg/media/commentaries/vietnamese-catholics-protests-over-environmental-issue-a-test-for-the-statechurch-relationship-by-chung-van-hoang-and-terence-chong/",
    "Vietnam: Catholic villages protest against slow and unequal compensation for Formosa Plastics toxic waste spill - Business & Human Rights Resource Centre, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.business-humanrights.org/en/latest-news/vietnam-catholic-villages-protest-against-slow-and-unequal-compensation-for-formosa-plastics-toxic-waste-spill/",
    "Vietnam: Repeal Harmful Internet Laws - Human Rights Watch, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://www.hrw.org/news/2024/12/11/vietnam-repeal-harmful-internet-laws",
    "Vietnam strengthens control of internet and civil society through new decrees, truy c\u1eadp v\u00e0o th\u00e1ng 2 27, 2026, https://advox.globalvoices.org/2025/01/07/vietnam-strengthens-control-of-internet-and-civil-society-through-new-decrees/",
    "T\u1ed5ng Gi\u00e1m M\u1ee5c S\u00e0i G\u00f2n. (2022). C\u00f4ng gi\u00e1o Vi\u1ec7t Nam tham gia th\u1ef1c hi\u1ec7n an sinh x\u00e3 h\u1ed9i. TGPSG. https://tgpsaigon.net/bai-viet/cong-giao-viet-nam-tham-gia-thuc-hien-an-sinh-xa-hoi-63770",
    "B\u00e1o D\u00e2n T\u1ed9c v\u00e0 Ph\u00e1t Tri\u1ec3n. (2023). \u0110\u1ed3ng b\u00e0o C\u00f4ng gi\u00e1o c\u00f3 nh\u1eefng \u0111\u00f3ng g\u00f3p t\u00edch c\u1ef1c trong s\u1ef1 ph\u00e1t tri\u1ec3n c\u1ee7a \u0111\u1ea5t n\u01b0\u1edbc. https://dantocphattrien.vietnamnet.vn/dong-bao-cong-giao-co-nhung-dong-gop-tich-cuc-trong-su-phat-trien-cua-dat-nuoc-1691397276430.htm",
    "B\u00e1o M\u1edbi. (2024). Ph\u00e1t huy gi\u00e1 tr\u1ecb C\u00f4ng gi\u00e1o trong k\u1ef7 nguy\u00ean m\u1edbi c\u1ee7a d\u00e2n t\u1ed9c. https://baomoi.com/phat-huy-gia-tri-cong-giao-trong-ky-nguyen-moi-cua-dan-toc-c51966134.epi",
  ],
};