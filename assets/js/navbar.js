var navBar = document.getElementById("nb");
if (urlParameters["nonavbar"] == undefined) {
    navBar.innerHTML = '<ul><li style="height: 51px;"><img src="/assets/image/branding/CalciumGamesLogo.png" style="margin-right: 0.3px;" height="50" width="50"></li><li><H3 style="color:black; padding: 0px 1px; margin: 12px;">Calcium Games</H3></li><li><a href="/#">Home</a></li><li><a href="/#about">About Us</a></li><li><a href="/#games">Our Games</a></li></ul><br>';
}