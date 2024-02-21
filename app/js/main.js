document.addEventListener('DOMContentLoaded', () => {

    const header = () => {
        const btn = document.querySelectorAll('.header-aside__btn');

        btn.forEach(i => {
            i.addEventListener('click', () => {
                i.classList.toggle('header-aside__btn--open')
            })
        })
    }
    header();
});