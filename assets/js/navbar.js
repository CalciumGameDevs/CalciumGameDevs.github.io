var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

LoadCss("/assets/css/navbar.css");

var navBar = document.getElementById("nb");

navBar.innerHTML = '<ul><li><a href="/">Home</a></li><li><a href="/games/">Our Games</a></li><li><a href="/about/">About Us</a></li></ul>';