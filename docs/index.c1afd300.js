!function(){t("fade-effect","fade-out"),n("progress-bar__number");var e=document.getElementsByTagName("main")[0];function t(e,t){for(var n=document.getElementsByClassName(e),i=1;i<=n.length;i++){n[i-1].id;var a=n[i-1];window.innerHeight-a.getBoundingClientRect().top<150?a.classList.contains(t)||a.classList.add(t):a.classList.contains(t)&&a.classList.remove("fade-out")}}function n(e){for(var t=document.getElementsByClassName(e),n=0;n<t.length;n++){var i=t[n],a=i.parentNode;if(window.innerHeight-a.getBoundingClientRect().top<150){i.parentNode.style.width=0}else{var o=i.parentNode,s=i.innerHTML;o.style.width=s}}}e.addEventListener("scroll",(function(){t("fade-effect","fade-out")})),e.addEventListener("scroll",(function(){n("progress-bar__number")}));var i=document.getElementsByClassName("youTubeVideo")[0];function a(){var e=.5625*i.getBoundingClientRect().width;i.height="".concat(e,"px")}window.addEventListener("resize",(function(){return a()})),a()}();
//# sourceMappingURL=index.c1afd300.js.map