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

const removeSlide = num => {
  dots[num].classList.replace('bg-white', 'bg-slate-200')
  dots[num].classList.replace('opacity-75', 'opacity-50')
  hero[num].classList.replace('opacity-100', 'opacity-0')
}

const addSlide = num => {
  dots[num].classList.replace('bg-slate-200', 'bg-white')
  dots[num].classList.replace('opacity-50', 'opacity-75')
  hero[num].classList.replace('opacity-0', 'opacity-100')
}

const updateSlide = () => {
  removeSlide(count)

  if (count === hero.length - 1) {
    count = 0
  } else {
    count += 1
  }

  addSlide(count)
}

setInterval(updateSlide, 6000)

// Adding left and right swipe functionality to slider:
const slideArea = document.querySelector('.slideArea')
let start = 0
let end = 0

slideArea.addEventListener(
  'touchstart',
  e => (start = e.changedTouches[0].screenX)
)

slideArea.addEventListener('touchend', e => {
  end = e.changedTouches[0].screenX

  // Check that it is swiped enough for it to be moved (swiped with intention, not just an accidental touch)
  if (
    (start - end < 100 && start - end > 0) ||
    (end - start < 100 && end - start > 0)
  )
    return

  removeSlide(count)

  count =
    end > start && count - 1 === -1
      ? hero.length - 1
      : end > start
      ? count - 1
      : count + 1 === hero.length
      ? 0
      : end < start
      ? count + 1
      : count

  addSlide(count)

  start = 0
})

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
