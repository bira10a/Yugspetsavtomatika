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

    const test = () => {
      const header = document.querySelector('.header');
  
    //   document.addEventListener('scroll', () => {
    //     if (window.pageYOffset >= 200) {
    //       header.classList.add('header--active');
    //     } else {
    //       header.classList.remove('header--active');
    //     }   
    //   })

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 100) {
          console.log(document.documentElement.scrollTop);
        } else {
            console.log(document.documentElement.scrollTop);
        }
      });

    };
    test();

    const burgerMenu = () => {
      const burger = document.querySelector('.burger'),
            body = document.querySelector('body');

      burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');

        if(burger.classList.contains('burger--active')) {
          body.classList.add('body--lock');
        } else {
          body.classList.remove('body--lock');
        }
      });
    };
    burgerMenu();
});