var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

function LoadJs(jsPath) {
    var thisJs = document.createElement('script');
    thisJs.language = 'JavaScript';
    thisJs.type = 'text/javascript';
    thisJs.src = jsPath; 

    head.appendChild(thisJs); 
}

LoadCss("/assets/css/navbar.css");
LoadJs("https://3EGaming.github.io/files/js/cookie.js");
LoadJs("https://3EGaming.github.io/files/js/urlvar.js");