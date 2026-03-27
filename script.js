const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const indicator = document.querySelector('.nav-indicator');

const pages = [
    document.querySelector('.hidden_Random_Page'),
    document.querySelector('.hidden_Setting_Page'),
    document.querySelector('.hidden_Advanced_Page')
];

function showPage(index) {
    // Ẩn tất cả các trang trước
    pages.forEach(page => {
        if (page) page.style.display = 'none';
    });
    // Hiện trang tương ứng với vị trí nút được nhấn
    if (pages[index]) {
        pages[index].style.display = 'block';
    }
}
// ------------------------------------------

function moveIndicator(anchorElement) {
    const parentLi = anchorElement.parentElement;
    const width = parentLi.offsetWidth;
    const left = parentLi.offsetLeft;

    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px)`;
}

window.addEventListener('load', () => {
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) {
        moveIndicator(activeLink);
        
        // Khởi tạo trang mặc định (Trang chủ - index 0)
        showPage(0); 
    }
});

links.forEach((link, index) => { // Thêm tham số index vào đây
    link.addEventListener('click', function(e) {
        // Ngăn chặn hành động mặc định của thẻ a
        e.preventDefault();

        links.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        moveIndicator(this);

        // --- PHẦN THÊM MỚI: Gọi hàm hiện trang ---
        showPage(index);
        // ------------------------------------------
    });
});