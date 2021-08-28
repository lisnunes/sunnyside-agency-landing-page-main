/* abre e fecha o menu quando clica*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar no item do menu, esconde-lo*/

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* scrollreveal mostrar elementos quando der scroll na página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  ` .container, #about .image, #about .text,
  #stand-out .image, #services .text,
  #projects .text, 
  #testimonials .text, #galery .image,
  footer, footer .social
  `,
  { interval: 100 }
)
