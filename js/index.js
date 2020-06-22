const clickHandle = (element, cb) => {
  element.addEventListener('click', cb)
}

const findSelector = (selectorName) => document.querySelector(selectorName)

const pageScripts = () => {
  AOS.init({
    duration: 800,
    offset: 0,
    once: true
  })

  previewButtonCLick()

  initSlider()
}

const addClass = (element, className) => {
  element.classList.add(className);
}

const removeClass = (element, className) => {
  element.classList.remove(className);
}

const previewButtonCLick = () => {
  const btn = findSelector('.preview__button')
  clickHandle(btn, () => {
    const previewSection = findSelector('.preview')
    addClass(previewSection, 'preview-activated')
    setTimeout(() => {
      const htmlDoc = document.querySelector('html')
      removeClass(htmlDoc, 'non-scroll')
    }, 0)
  })
}

const initSlider =() => {
  const mySwiper = new Swiper ('.swiper-container', {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  })
  mySwiper.on('slideChange', function () {
    const currentIndex = mySwiper.activeIndex
    const backs = [...document.querySelectorAll('.slider__back')]
    const src = backs[currentIndex].src

    setButtonHref(src)
  });
}

const setButtonHref = (href) => {
  const button = findSelector('.slider__button')
  button.href = href
}

pageScripts()
