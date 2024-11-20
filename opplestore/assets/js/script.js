// 导航栏滚动效果
let lastScrollTop = 0;
const nav = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // 控制导航栏显示/隐藏
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // 向下滚动
        nav.classList.add('nav-hidden');
    } else {
        // 向上滚动
        nav.classList.remove('nav-hidden');
    }
    lastScrollTop = currentScroll;
});

// 产品卡片滚动动画
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 观察所有产品卡片
document.querySelectorAll('.product-tile').forEach(tile => {
    observer.observe(tile);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 页面加载完成后的动画
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}); 