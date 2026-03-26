const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const indicator = document.querySelector('.nav-indicator');

function moveIndicator(anchorElement) {
    // Lấy phần tử <li> chứa thẻ <a> này
    const parentLi = anchorElement.parentElement;
    
    // Tính toán chiều rộng và vị trí lề trái của <li> so với <ul>
    const width = parentLi.offsetWidth;
    const left = parentLi.offsetLeft;

    // Cập nhật indicator
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px)`;
}

// 1. Khởi tạo vị trí mặc định khi trang web vừa tải xong
window.addEventListener('load', () => {
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) {
        moveIndicator(activeLink);
    }
});

// 2. Xử lý khi click
links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Xóa class active cũ
        links.forEach(item => item.classList.remove('active'));

        // Thêm class active vào thẻ vừa click
        this.classList.add('active');

        // Di chuyển thanh trượt
        moveIndicator(this);
    });
});