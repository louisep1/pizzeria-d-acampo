const hero = document.getElementById('hero-img')
const dots = document.querySelectorAll('.imgDots')
const imgSuffixes = ['hero-1', 'hero-2', 'hero-3']

let count = 0

dots.forEach((dot, i) =>
  dot.addEventListener('click', () => {
    hero.classList.replace(`bg-${imgSuffixes[count]}`, `bg-${imgSuffixes[i]}`)
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
  hero.classList.remove(`bg-${imgSuffixes[count]}`)

  if (count === imgSuffixes.length - 1) {
    count = 0
  } else {
    count += 1
  }

  dots[count].classList.replace('bg-slate-200', 'bg-white')
  dots[count].classList.replace('opacity-50', 'opacity-75')
  hero.classList.add(`bg-${imgSuffixes[count]}`)
}

setInterval(updateSlide, 4000)
