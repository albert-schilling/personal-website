// Initial function call
checkInSight('fade-effect', 'fade-out')
changeWidthIfInSight('progress-bar__number')

// Add scroll event and call specified functions
const mainElement = document.getElementsByTagName('main')[0]

mainElement.addEventListener('scroll', () => {
  checkInSight('fade-effect', 'fade-out')
})
mainElement.addEventListener('scroll', () => {
  changeWidthIfInSight('progress-bar__number')
})

// Function checkInSight to calculate if an element with specified className
// is inside the viewport (> 150px) and then toggle specified className "toggleClass"
function checkInSight(className, toggleClass) {
  let fadeOutArticlesArray = document.getElementsByClassName(className)

  for (let i = 1; i <= fadeOutArticlesArray.length; i++) {
    let ArticleID = fadeOutArticlesArray[i - 1].id
    let fadeOutArticle = fadeOutArticlesArray[i - 1]
    let heightWindow = window.innerHeight
    let articleTop = fadeOutArticle.getBoundingClientRect().top
    let difference = heightWindow - articleTop

    if (difference < 150) {
      // console.log(`Article with ID "${ArticleID}" is not in sight.`);
      if (!fadeOutArticle.classList.contains(toggleClass)) {
        fadeOutArticle.classList.add(toggleClass)
      }
    } else {
      if (fadeOutArticle.classList.contains(toggleClass)) {
        // console.log(`Article with ID "${ArticleID}" is in sight.`);
        fadeOutArticle.classList.remove('fade-out')
        // console.log(`Class "${ArticleID}" has been removed.`);
      }
    }
  }
}

// function changeWidthIfInSight that changes the width of a parentNode
// according to the innerHTML of an element
// if this element is inside the viewport
function changeWidthIfInSight(className) {
  const targetElementsArray = document.getElementsByClassName(className)
  for (let i = 0; i < targetElementsArray.length; i++) {
    const targetElement = targetElementsArray[i]
    const targetElementParent = targetElement.parentNode
    // console.log(targetElementParent)
    const heightWindow = window.innerHeight
    const elementTop = targetElementParent.getBoundingClientRect().top
    // console.log(`${elementTop} ElementTop`)
    // console.log(`${heightWindow} heightWindow`)
    const difference = heightWindow - elementTop
    // console.log(targetElement)
    // console.log(`${difference} difference`)
    if (difference < 150) {
      // console.log(`Progress bar is not in sight.`)
      const targetElementParent = targetElement.parentNode
      targetElementParent.style.width = 0
    } else {
      // console.log(`Progress bar is in sight.`)
      const targetElementParent = targetElement.parentNode
      const targetElementWidth = targetElement.innerHTML
      targetElementParent.style.width = targetElementWidth
    }
  }
}

const youTubeVideo = document.getElementsByClassName('youTubeVideo')[0]

window.addEventListener('resize', () => adaptYouTubeVideoHeight())

adaptYouTubeVideoHeight()

function adaptYouTubeVideoHeight() {
  const width = youTubeVideo.getBoundingClientRect().width
  const height = width * 0.5625
  youTubeVideo.height = `${height}px`
}
