// The ifInSightStartFunc-function has been discarded and thus relocated in this file
// which is not in use

// Initial function call
ifInSightStartFunc(
  'progress-bar__number',
  writeWidthOnSight,
  'progress-bar__number',
  writeZeroWidthIfNotInSight,
  'progress-bar__number'
)

// Add scroll event and call specified functions
const mainElement = document.getElementsByTagName('main')[0]

mainElement.addEventListener('scroll', () => {
  ifInSightStartFunc(
    'progress-bar__container',
    writeWidthOnSight,
    'progress-bar__number',
    writeZeroWidthIfNotInSight,
    'progress-bar__number'
  )
})

// Function ifInSightStartFunc to calculate if an element with specified className
// is inside the viewport (> 150px) and then start specified function
function ifInSightStartFunc(
  className,
  visibleFunc,
  visibleFuncParam,
  unvisibleFunc,
  unvisibleFuncParam
) {
  const targetElementsArray = document.getElementsByClassName(className)
  console.log(targetElementsArray)
  console.log(targetElementsArray[0])
  for (let i = 0; i < targetElementsArray.length; i++) {
    console.log(i)
    console.log(targetElementsArray[i])
    let targetElement = targetElementsArray[i]
    console.log(targetElement)
    let heightWindow = window.innerHeight
    let elementTop = targetElement.getBoundingClientRect().top
    let difference = heightWindow - elementTop
    console.log(difference)

    if (difference < 150) {
      unvisibleFunc(unvisibleFuncParam)
      console.log('not visible')
    } else {
      visibleFunc(visibleFuncParam)
      console.log('visible')
    }
  }
}

// take content from specified class and set as width into parentNode
function writeWidthOnSight(className) {
  const el = document.getElementsByClassName(className)
  for (let i = 0; i < el.length; i++) {
    const elParent = el[i].parentNode
    const elWidth = el[i].innerHTML
    elParent.style.width = elWidth
    // const elemNumber = elem[0].firstChild.innerHTML
    // elem[0].style.width = `${elemNumber}%`
  }
}

// Set width to 0 if not in sight:
function writeZeroWidthIfNotInSight(className) {
  const el = document.getElementsByClassName(className)
  for (let i = 0; i < el.length; i++) {
    const elParent = el[i].parentNode
    elParent.style.width = 0
  }
}
