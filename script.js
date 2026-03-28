const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const bookList = document.querySelector('.book-list');

// Dynamic scroll
function getScrollAmount() {
    if (window.innerWidth <= 768) return 200;
    if (window.innerWidth <= 1024) return 300;
    return 400;
}

// Buttons
scrollRightBtn.addEventListener('click', () => {
    bookList.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

scrollLeftBtn.addEventListener('click', () => {
    bookList.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

// Hide buttons
function updateButtons() {
    scrollLeftBtn.style.display = bookList.scrollLeft <= 0 ? "none" : "flex";

    scrollRightBtn.style.display =
        bookList.scrollLeft + bookList.clientWidth >= bookList.scrollWidth - 5
        ? "none"
        : "flex";
}

bookList.addEventListener('scroll', updateButtons);
updateButtons();

// AUTO SCROLL WITH HOVER CONTROL
let autoScroll = setInterval(scrollAuto, 4000);

function scrollAuto() {
    if (bookList.scrollLeft + bookList.clientWidth >= bookList.scrollWidth - 5) {
        bookList.scrollTo({ left: 0, behavior: 'smooth' }); // restart
    } else {
        bookList.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
}

// Pause on hover
bookList.addEventListener("mouseenter", () => {
    clearInterval(autoScroll);
});

// Resume
bookList.addEventListener("mouseleave", () => {
    autoScroll = setInterval(scrollAuto, 4000);
});