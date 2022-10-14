// Hero slider:
const hero = document.querySelectorAll('.heroImg ')
const dots = document.querySelectorAll('.imgDots')

let count = 0

dots.forEach((dot, i) =>
  dot.addEventListener('click', () => {
    if (i === count) return

    hero[i].classList.replace('opacity-0', 'opacity-100')
    hero[count].classList.replace('opacity-100', 'opacity-0')
    dots[count].classList.replace('bg-white', 'bg-slate-200')
    dots[count].classList.replace('opacity-75', 'opacity-50')
    dots[i].classList.replace('bg-slate-200', 'bg-white')
    dots[i].classList.replace('opacity-50', 'opacity-75')
    count = i
  })
)

const updateSlide = () => {
  dots[count].classList.replace('bg-white', 'bg-slate-200')
  dots[count].classList.replace('opacity-75', 'opacity-50')
  hero[count].classList.replace('opacity-100', 'opacity-0')

  if (count === hero.length - 1) {
    count = 0
  } else {
    count += 1
  }

  dots[count].classList.replace('bg-slate-200', 'bg-white')
  dots[count].classList.replace('opacity-50', 'opacity-75')
  hero[count].classList.replace('opacity-0', 'opacity-100')
}

setInterval(updateSlide, 4000)

// Fade on scroll effect:
const fadeSection = document.querySelectorAll('.fadeOnScroll')

const fadeOnScroll = () => {
  fadeSection.forEach(section => {
    if (section.getBoundingClientRect().top <= (window.innerHeight / 5) * 4) {
      section.classList.replace('opacity-0', 'opacity-100')
    }
  })
}

fadeOnScroll()

window.addEventListener('scroll', fadeOnScroll)

// window.addEventListener('scroll', () => {
//   fadeSection.forEach(section => {
//     if (section.getBoundingClientRect().top <= 300 && !mobile) {
//       section.classList.replace('opacity-0', 'opacity-100')
//     } else if (section.getBoundingClientRect().top <= 600) {
//       section.classList.replace('opacity-0', 'opacity-100')
//     }
//   })
// })
