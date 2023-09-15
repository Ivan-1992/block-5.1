window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 320px)',
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
    },
  );
});


let openAll = document.querySelector('.modal__show');
let closeAll = document.querySelector('.modal__hide');
let sliderVisible = document.querySelectorAll('.img-visibility');
let sliderNonVisible = document.querySelectorAll('.swiper-slide');
let sliderTabletVisible = document.querySelectorAll('.tablet-visibility');


openAll.addEventListener('click', function () {
	openAll.classList.add('non-visibility');
	closeAll.classList.remove('non-visibility');
	for (let i = 0; i < sliderVisible.length; i++) {
		sliderVisible[i].classList.remove('img-visibility');
	};
	for (let k = 0; k < sliderTabletVisible.length; k++) {
		sliderTabletVisible[k].classList.remove('tablet-visibility');
	};
});

closeAll.addEventListener('click', function() {
	closeAll.classList.add('non-visibility');
	openAll.classList.remove('non-visibility');
	for (let j = 8; j < sliderNonVisible.length; j++) {
		sliderNonVisible[j].classList.add('img-visibility');
	};
	for (let k = 0; k < sliderTabletVisible.length; k++) {
		sliderTabletVisible[k].classList.add('tablet-visibility');
	};
});
