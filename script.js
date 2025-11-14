const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const bookList = document.querySelector('.book-list');

// right button
scrollRightBtn.addEventListener('click', () => {
    bookList.scrollLeft += 400; 
});

// left button
scrollLeftBtn.addEventListener('click', () => {
    bookList.scrollLeft -= 400; 
});
