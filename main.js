// 1. Hiệu ứng hiện dần khi cuộn (AOS)
//    once: false  -> chạy lại mỗi lần phần tử vào màn hình
//    mirror: true -> chạy cả khi cuộn ngược lên
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: false, mirror: true, offset: 60 });

// 1b. Cuộn mượt có quán tính (Lenis)
//     Bỏ qua nếu người dùng bật "giảm chuyển động" trong hệ điều hành
const HEADER_OFFSET = -72; // trừ chiều cao header để tiêu đề không bị che
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lenis = reduceMotion ? null : new Lenis({ duration: 1.2, smoothWheel: true });

if (lenis) {
    // Lenis cần được gọi mỗi khung hình
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// Mọi link nội bộ (#...) đều cuộn mượt qua Lenis
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(target, { offset: HEADER_OFFSET });
        } else {
            target.scrollIntoView();
        }
    });
});

// 2. Hiệu ứng gõ chữ cho chức danh (Typed.js)
new Typed('#typed', {
    strings: ['Internship', 'Fresher', 'Junior', 'Front-end Developer'],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1500,
    loop: true,
});

// 3. Menu mobile: bấm nút để mở/đóng, bấm link thì tự đóng
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuBtn.innerHTML = isOpen ? '<i class="ti-close"></i>' : '<i class="ti-menu"></i>';
});

mobileMenu.querySelectorAll('a, button').forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.innerHTML = '<i class="ti-menu"></i>';
    });
});

// 4. Khi cuộn: đổi nền header và hiện nút lên đầu trang
const header = document.getElementById('header');
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    toTop.classList.toggle('show', window.scrollY > 500);
});

// 5. Tô sáng link menu của mục đang xem
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('#home, #information, #education, #skill, #work-experience, #projects, #certificate, #hobbie')
    .forEach((section) => observer.observe(section));

// 6. Năm hiện tại cho footer
document.getElementById('year').textContent = new Date().getFullYear();
