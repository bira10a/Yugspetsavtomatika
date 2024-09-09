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
  
      window.addEventListener('scroll', () => {
          if (document.documentElement.scrollTop > 100) {
            console.log(document.documentElement.scrollTop);
          } else {
              console.log(document.documentElement.scrollTop);
          }
        });

    };
    // test();

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


    const myAnimation = () => {
      const block = document.querySelectorAll('.header__list li');
      const block2 = document.querySelectorAll('.header-aside__item');
      const logo = document.querySelector('.header__logo');
      
      setTimeout(() => {
        logo.style.transform = 'translateY(0)';
        logo.style.opacity = 1;
      }, 1100);

      setTimeout(() => {
        block.forEach(i => {
          i.style.transform = 'translateY(0)';
          i.style.opacity = 1;
        });
      }, 1300);

      setTimeout(() => {
        block2.forEach(i => {
          i.style.transform = 'translateX(0)';
          i.style.opacity = 1;
        });
      }, 1700);
    }
    myAnimation();

    const modalInfoAbout = () => {
      const button = document.querySelectorAll('.aboutUs__item-btn'),
            modal = document.querySelector('.modal'),
            modalClose = document.querySelector('.modal__close');

      button.forEach((btn, num) => {
        btn.addEventListener('click', () => {
          modal.classList.add('modal--active');
        });
      });

      modalClose.addEventListener('click', () => {
        modal.classList.remove('modal--active');
      });

      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('modal--active')) {
          modal.classList.remove('modal--active');
        }
      });

      modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__content')) {
          if (modal.classList.contains('modal--active')) {
            modal.classList.remove('modal--active');
          }
        }
      });

      //modal
    };
    modalInfoAbout();
  ///////////////////////////////////////// GSAP

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const tlLoader = gsap.timeline();

  tlLoader
  .set('.loader__item', {yPercent: -100})
  .set('.loader__title', {opacity: 0})
  .set('.loader__logo', {opacity: 0})
  .to('.loader__item', {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__item', {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__logo', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .to('.loader__title', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .set('.loader__item', {
    yPercent: -100,
  })
  .to('.loader__logo', {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to('.loader__title', {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to(
    '.loader', {
      yPercent: -100,
      duration: 1,
    },
    '-=0.2'
  )


  if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true
    })

    let itemsL = gsap.utils.toArray('.aboutUs__title')

    itemsL.forEach(item => {
      gsap.fromTo(item, { opacity: 0, x: -200 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-650',
          end: '-100',
          scrub: true
        }
      })
    })
    
    let itemsR = gsap.utils.toArray('.aboutUs__text')

    itemsR.forEach(item => {
      gsap.fromTo(item, { opacity: 0, x: +200 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-650',
          end: '-100',
          scrub: true
        }
      })
    })

    let aboutUsItemLeft = gsap.utils.toArray('.aboutUs__item--left')

    aboutUsItemLeft.forEach(item => {
      gsap.fromTo(item, { opacity: 0, x: -500 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-550',
          end: '-150',
          scrub: true
        }
      })
    })

    let aboutUsItemRight = gsap.utils.toArray('.aboutUs__item--right')

    aboutUsItemRight.forEach(item => {
      gsap.fromTo(item, { opacity: 0, x: +500 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-550',
          end: '-150',
          scrub: true
        }
      })
    })

    gsap.fromTo('.partners__title', { opacity: 0, x: -300 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: '.partners',
        start: '-750',
        end: '-100',
        scrub: true
      }
    })
    
    gsap.fromTo('.partners__container', { opacity: 0, x: -300 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: '.partners',
        start: '-550',
        end: '-200',
        scrub: true
      }
    })

    gsap.fromTo('.map__title', { opacity: 0, x: +300 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: '.map',
        start: '-550',
        end: '-100',
        scrub: true
      }
    })

    gsap.fromTo('.map__google', { opacity: 0, x: +300 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: '.map',
        start: '-450',
        end: '-100',
        scrub: true
      }
    })


    // gsap.fromTo('.header', { opacity: 1 }, {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: '.header',
    //     start: 'center',
    //     end: '650',
    //     scrub: true
    //   }
    // })

    // end if
  }

});

// window.onload = () => {
//   console.log(`good`);
// }