const swiper = new Swiper('.swiper', {
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const items = document.querySelectorAll('.tours__item')
items.forEach(element => {
    element.addEventListener('click', () => {
        items.forEach(item => item.classList.remove('tours__item--active'))
        element.classList.add('tours__item--active')
    })
})