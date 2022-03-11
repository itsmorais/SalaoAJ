// DOM Document object model
// abrir e fechar menu toggle
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// após clicar em um link do menu, esconder menu
const links = document.querySelectorAll('nav ul li a')

// Manipulando Lista toggle
// abre e fecha menu toggle mobile
for (const element of toggle) {
  element.addEventListener('click', function () {
    // incluindo a palavra show ao identificador da classe
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da página quando der scroll (BOX SHADOW)*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //Scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/** TESTIMONIALS Caroulsel,Slider */

const swiper = new Swiper('.swiper', {
  breakpoints: {
    375: {
      setWrapperSize: true,
      mousewheel: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination'
      }
    },
    1000: {
      slidesPerView: 2,
      setWrapperSize: true,
      mousewheel: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }
})

if (window.innerWidth < 1000) {
  let paginationPrev = document.querySelector('.swiper-button-prev')
  let paginationNext = document.querySelector('.swiper-button-next')
  paginationNext.parentNode.removeChild(paginationNext)
  paginationPrev.parentNode.removeChild(paginationPrev)
}

/** ScrollReveal : Mostrar elementos quandod er scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links, .brand, .social

`,
  { interval: 100 }
)

/** Botão voltar para o Topo */
/** Back to top button */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 650) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/** Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = scrollY + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop

    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/** When Scroll  */

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
