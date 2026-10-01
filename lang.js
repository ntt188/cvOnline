// Từ điển đa ngôn ngữ.
// Mỗi phần tử HTML có data-i18n="key" sẽ được thay nội dung bằng translations[ngôn ngữ][key].
// Muốn thêm ngôn ngữ mới: copy khối "en", đổi tên (ví dụ "ja") rồi dịch phần chữ.
const translations = {
    vi: {
        'meta.title': 'CV Nguyễn Thanh Thắng',
        'meta.description': 'CV online của Nguyễn Thanh Thắng - Front-end Developer (Internship, Fresher, Junior)',

        'nav.home': 'Trang chủ',
        'nav.information': 'Thông tin',
        'nav.education': 'Học vấn',
        'nav.skill': 'Kỹ năng',
        'nav.experience': 'Kinh nghiệm',
        'nav.projects': 'Dự án',
        'nav.certificates': 'Chứng chỉ',
        'nav.hobbies': 'Sở thích',
        'nav.pdf': 'Tải PDF',
        'aria.menu': 'Mở menu',
        'aria.toTop': 'Lên đầu trang',

        'home.hello': 'Xin chào, tôi là',
        'home.avatarAlt': 'Ảnh CV Nguyễn Thanh Thắng',
        'home.goalLabel': 'Mục tiêu:',
        'home.goal': 'Hiện tại tiếp thu thêm kiến thức và kinh nghiệm. Mục tiêu hiện tại là được làm việc, nâng cao kỹ năng, và học hỏi thêm nhiều công nghệ về front-end (ReactJS, Angular, VueJS,...), có thể thử sức với cả back-end. Mục tiêu cho tương lai là trở thành lập trình viên full-stack và muốn thử sức ở nhiều vị trí mới.',
        'home.wishLabel': 'Mong muốn:',
        'home.wish': 'Tôi mong muốn được làm việc ở một môi trường chuyên nghiệp, ở đó tôi có thể phát triển kỹ năng cần có để phát triển sau này, học hỏi thêm kiến thức mới để hoàn thành công việc được giao.',
        'home.contact': 'Liên hệ',

        'stats.gpa': 'GPA – Loại Giỏi',
        'stats.months': 'Tháng tại FPT Software',
        'stats.projects': 'Dự án đã tham gia',
        'stats.certificates': 'Chứng chỉ',

        'info.title': 'Thông tin cá nhân',
        'info.gender': 'Nam',

        'edu.title': 'Học vấn',
        'edu.school': 'ĐẠI HỌC DUY TÂN',
        'edu.majorLabel': 'Chuyên ngành:',
        'edu.major': 'Công nghệ phần mềm',
        'edu.rankLabel': 'Tốt nghiệp loại:',
        'edu.rank': 'Giỏi',
        'edu.gpaLabel': ', Điểm GPA:',

        'skill.title': 'Các kỹ năng',
        'skill.basicTitle': 'Kiến thức cơ bản về lập trình',
        'skill.basic': 'Kiến thức cơ bản về các ngôn ngữ lập trình (C, C++, C#, Java,...), kiến thức về lập trình hướng đối tượng (OOP), cơ sở dữ liệu SQL.',
        'skill.uiTitle': 'Lập trình giao diện',
        'skill.ui': 'Các kỹ năng cơ bản của HTML, CSS. Có kiến thức cơ bản về Bootstrap, ReactJS, Angular.',
        'skill.techTitle': 'Công nghệ đã sử dụng',
        'skill.backend': 'Back-end & Ngôn ngữ',
        'skill.database': 'Cơ sở dữ liệu & Công cụ',

        'exp.title': 'Kinh nghiệm làm việc',
        'exp.job2Title': 'NHÂN VIÊN',
        'exp.job2': 'Hỗ trợ team hoàn thành project qua các ngôn ngữ React, Angular,...',
        'exp.job1': 'Học các kiến thức về .Net, OOP, FE, CSDL.',

        'proj.title': 'Dự án & thông tin thêm',
        'proj.intro': 'Các dự án đã tham gia trong quá trình học tập tại trường và làm việc tại FPT SOFTWARE:',
        'proj.roleLabel': 'Vai trò:',
        'proj.p1Title': 'Ứng dụng Social media (MERN stack)',
        'proj.p1': 'Xây dựng ứng dụng Social media bằng MERN stack: Scrum master, thiết kế giao diện frontend và code chức năng đăng nhập, đăng ký và làm tester.',
        'proj.p2Title': 'Website bán hàng tích hợp AI',
        'proj.p2': 'Xây dựng website bán hàng tích hợp AI tìm kiếm: thiết kế giao diện frontend và làm tester.',
        'proj.p3Title': 'Dự án tại FPT Software',
        'proj.p3': 'Được tham gia quan sát các dự án liên quan đến React, Angular, Java, WinForm, .Net tại FPT SOFTWARE.',
        'proj.p3Role': 'Quan sát · Hỗ trợ',

        'cert.title': 'Chứng chỉ',

        'hobby.title': 'Sở thích',
        'hobby.music': 'Nghe nhạc: nghe nhạc để thư giãn',
        'hobby.society': 'Tìm hiểu kiến thức xã hội: bệnh tật, sách, thiên văn,...',
        'hobby.travel': 'Du lịch: đi những nơi chưa từng đến.',

        'footer.cta': 'Cùng làm việc với nhau nhé!',
    },

    en: {
        'meta.title': 'Nguyễn Thanh Thắng – CV',
        'meta.description': 'Online CV of Nguyễn Thanh Thắng - Front-end Developer (Internship, Fresher, Junior)',

        'nav.home': 'Home',
        'nav.information': 'Information',
        'nav.education': 'Education',
        'nav.skill': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.certificates': 'Certificates',
        'nav.hobbies': 'Hobbies',
        'nav.pdf': 'Download PDF',
        'aria.menu': 'Open menu',
        'aria.toTop': 'Back to top',

        'home.hello': "Hi, I'm",
        'home.avatarAlt': 'Photo of Nguyễn Thanh Thắng',
        'home.goalLabel': 'Objective:',
        'home.goal': 'I am currently building more knowledge and experience. My short-term goal is to work, improve my skills, and learn more front-end technologies (ReactJS, Angular, VueJS,...), and also try back-end development. My long-term goal is to become a full-stack developer and take on new roles.',
        'home.wishLabel': 'Aspiration:',
        'home.wish': 'I hope to work in a professional environment where I can develop the skills I need for future growth and keep learning new things to complete my assigned work.',
        'home.contact': 'Contact',

        'stats.gpa': 'GPA – Very Good',
        'stats.months': 'Months at FPT Software',
        'stats.projects': 'Projects',
        'stats.certificates': 'Certificate',

        'info.title': 'Personal information',
        'info.gender': 'Male',

        'edu.title': 'Education',
        'edu.school': 'DUY TAN UNIVERSITY',
        'edu.majorLabel': 'Major:',
        'edu.major': 'Software Engineering',
        'edu.rankLabel': 'Graduated with:',
        'edu.rank': 'Very Good',
        'edu.gpaLabel': ', GPA:',

        'skill.title': 'Skills',
        'skill.basicTitle': 'Programming fundamentals',
        'skill.basic': 'Basic knowledge of programming languages (C, C++, C#, Java,...), object-oriented programming (OOP), and SQL databases.',
        'skill.uiTitle': 'Front-end development',
        'skill.ui': 'Basic HTML and CSS skills. Basic knowledge of Bootstrap, ReactJS and Angular.',
        'skill.techTitle': 'Technologies used',
        'skill.backend': 'Back-end & Languages',
        'skill.database': 'Databases & Tools',

        'exp.title': 'Work experience',
        'exp.job2Title': 'EMPLOYEE',
        'exp.job2': 'Supported the team in completing projects with React, Angular,...',
        'exp.job1': 'Learned .NET, OOP, front-end and databases.',

        'proj.title': 'Projects & more',
        'proj.intro': 'Projects I took part in during my studies and while working at FPT SOFTWARE:',
        'proj.roleLabel': 'Role:',
        'proj.p1Title': 'Social media app (MERN stack)',
        'proj.p1': 'Built a social media app with the MERN stack: Scrum master, designed the frontend UI, coded the sign-in and sign-up features, and worked as a tester.',
        'proj.p2Title': 'E-commerce website with AI',
        'proj.p2': 'Built an e-commerce website with AI-powered search: designed the frontend UI and worked as a tester.',
        'proj.p3Title': 'Projects at FPT Software',
        'proj.p3': 'Observed projects involving React, Angular, Java, WinForm and .NET at FPT SOFTWARE.',
        'proj.p3Role': 'Observer · Support',

        'cert.title': 'Certificates',

        'hobby.title': 'Hobbies',
        'hobby.music': 'Music: listening to music to relax',
        'hobby.society': 'Learning about the world: health, books, astronomy,...',
        'hobby.travel': "Travel: visiting places I've never been.",

        'footer.cta': "Let's work together!",
    },
};
