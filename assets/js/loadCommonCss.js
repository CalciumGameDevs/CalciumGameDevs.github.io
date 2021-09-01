var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

LoadCss("/assets/css/navbar.css");
loadjs("https://3EGaming.github.io/files/js/cookie.js");
loadjs("https://3EGaming.github.io/files/js/urlvar.js");