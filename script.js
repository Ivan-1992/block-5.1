window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('resize', checker);
    checker();
  };

  resizableSwiper(
    '(max-width: 767px)',
    '.swiper',
    {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dinamicBullets: true,
      },
    }
  );
});


const openBtn = document.querySelector('.btn');
const sliderVisible = document.querySelector('.swiper-wrapper');

openBtn.addEventListener('click', function() {
  sliderVisible.classList.toggle('see');
  openBtn.classList.toggle('close');
  if (openBtn.classList.contains('close')){
    openBtn.textContent = 'Скрыть';
  } else {
    openBtn.textContent = 'Показать все';
  }
});