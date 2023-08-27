// Initial function call
t("fade-effect","fade-out"),n("progress-bar__number");// Add scroll event and call specified functions
const e=document.getElementsByTagName("main")[0];// Function checkInSight to calculate if an element with specified className
// is inside the viewport (> 150px) and then toggle specified className "toggleClass"
function t(e,t){let n=document.getElementsByClassName(e);for(let e=1;e<=n.length;e++){n[e-1].id;let s=n[e-1];window.innerHeight-s.getBoundingClientRect().top<150?s.classList.contains(t)||s.classList.add(t):s.classList.contains(t)&&s.classList.remove("fade-out")}}// function changeWidthIfInSight that changes the width of a parentNode
// according to the innerHTML of an element
// if this element is inside the viewport
function n(e){let t=document.getElementsByClassName(e);for(let e=0;e<t.length;e++){let n=t[e],s=n.parentNode,i=window.innerHeight,o=s.getBoundingClientRect().top,l=i-o;// console.log(targetElement)
// console.log(`${difference} difference`)
if(l<150){// console.log(`Progress bar is not in sight.`)
let e=n.parentNode;e.style.width=0}else{// console.log(`Progress bar is in sight.`)
let e=n.parentNode,t=n.innerHTML;e.style.width=t}}}e.addEventListener("scroll",()=>{t("fade-effect","fade-out")}),e.addEventListener("scroll",()=>{n("progress-bar__number")});const s=document.getElementsByClassName("youTubeVideo")[0];function i(){let e=s.getBoundingClientRect().width;s.height=`${.5625*e}px`}//# sourceMappingURL=index.4cf8b6df.js.map
window.addEventListener("resize",()=>i()),i();
//# sourceMappingURL=index.4cf8b6df.js.map
