var navBar = document.getElementById("nb");
if (urlVariables["nonavbar"] == undefined) {
    navBar.innerHTML = '<ul><li><a href="/">Home</a></li><li><a href="/games/">Our Games</a></li><li><a href="/about/">About Us</a></li></ul><br>';
}