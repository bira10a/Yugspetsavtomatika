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

    // const test = () => {
    //   const header = document.querySelector('.header');
  
    //   document.addEventListener('scroll', () => {
    //     if (window.pageYOffset >= 200) {
    //       header.classList.add('header--active');
    //     } else {
    //       header.classList.remove('header--active');
    //     }   
    //   })
    // };
    // test();
});