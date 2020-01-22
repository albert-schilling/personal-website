
const mainElement = document.getElementsByTagName('main')[0];
mainElement.addEventListener('scroll', () => {
  checkInSight('article','fade-out');
});

// Function to calculate if an element with specified className
// is inside the viewport (> 100px) and then toggle specified className "toggleClass"
function checkInSight (className, toggleClass) {
  let fadeOutArticlesArray = document.getElementsByTagName(className); 

  for (let i = 1; i <= fadeOutArticlesArray.length; i++) {
    let ArticleID = fadeOutArticlesArray[i - 1].id;
    let fadeOutArticle = fadeOutArticlesArray[i - 1];
    let heightWindow = window.innerHeight;
    let articleTop = fadeOutArticle.getBoundingClientRect().top;
    let difference = heightWindow - articleTop;

    if (difference < 150) {
      // console.log(`Article with ID "${ArticleID}" is not in sight.`);
      if (!fadeOutArticle.classList.contains(toggleClass)) {
        fadeOutArticle.classList.add(toggleClass);
      }
    } else {
      if (fadeOutArticle.classList.contains(toggleClass)) {
        // console.log(`Article with ID "${ArticleID}" is in sight.`);
        fadeOutArticle.classList.remove("fade-out");
        // console.log(`Class "${ArticleID}" has been removed.`);
      }
      
    }
  }
}

checkInSight('article','fade-out');