var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

if (urlVariables["nonavbar"] == undefined) {
    LoadCss("/assets/css/navbar.css");
    LoadCss("/assets/css/background.css");
}

LoadCss("https://indestructibletype.com/fonts/Jost.css");
LoadCss("/assets/css/defaultfont.css");