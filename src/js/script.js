import '@fontsource-variable/inter'

document.documentElement.classList.add('js')

// Show a border under the sticky header once the page is scrolled
const header = document.querySelector('.site-header')
const updateHeader = () =>
  header?.classList.toggle('is-scrolled', window.scrollY > 8)
updateHeader()
window.addEventListener('scroll', updateHeader, { passive: true })

// Fade sections in as they enter the viewport
const revealTargets = document.querySelectorAll(
  '.section .container > *, .facts'
)
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' }
  )
  for (const target of revealTargets) {
    target.classList.add('reveal')
    observer.observe(target)
  }
}

// Full-screen viewer for the Bardery screenshots
const lightbox = document.querySelector('.lightbox')
const screens = [...document.querySelectorAll('.screens__item')]
if (lightbox && screens.length) {
  const frame = lightbox.querySelector('.lightbox__frame')
  const image = lightbox.querySelector('.lightbox__image')
  const caption = lightbox.querySelector('.lightbox__caption')
  let current = 0

  const show = (index) => {
    current = (index + screens.length) % screens.length
    const figure = screens[current]
    const source = figure.querySelector('img')
    const showBottom = figure.classList.contains('screens__item--bottom')
    // Cropped screens open at the part they show
    const scroll = () => {
      frame.scrollTop = showBottom ? frame.scrollHeight : 0
    }
    image.onload = scroll
    image.src = source.currentSrc || source.src
    image.alt = source.alt
    caption.textContent = `${figure.querySelector('figcaption').textContent} (${current + 1}/${screens.length})`
    if (image.complete) scroll()
  }

  screens.forEach((figure, index) => {
    figure.querySelector('.screens__open').addEventListener('click', () => {
      show(index)
      lightbox.showModal()
      document.documentElement.style.overflow = 'hidden'
    })
  })

  lightbox.addEventListener('close', () => {
    document.documentElement.style.overflow = ''
  })
  lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close())
  lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', () => show(current - 1))
  lightbox.querySelector('.lightbox__nav--next').addEventListener('click', () => show(current + 1))

  // Clicking the dark background closes the viewer
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.classList.contains('lightbox__figure')) {
      lightbox.close()
    }
  })

  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1)
    if (event.key === 'ArrowRight') show(current + 1)
  })

  // Horizontal swipe on touch screens
  let touchStart = null
  lightbox.addEventListener('touchstart', (event) => {
    touchStart = event.touches[0]
  }, { passive: true })
  lightbox.addEventListener('touchend', (event) => {
    if (!touchStart) return
    const dx = event.changedTouches[0].clientX - touchStart.clientX
    const dy = event.changedTouches[0].clientY - touchStart.clientY
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1))
    touchStart = null
  })
}
