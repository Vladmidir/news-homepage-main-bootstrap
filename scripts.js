function openMenu() {
    document.getElementById("open-button").style.display = "none";

    document.getElementById("nav-links").style.width = "200px";
    document.getElementById("close-button").style.display = "inline";

    document.getElementById("overlay-div").style.width = "100%";
    //This breaks the nav. When we go back to large screen, the styles are all messed up.

}
//Add aria-expended?
function closeMenu() {
    document.getElementById("open-button").style.display = "inline";
    document.getElementById("close-button").style.display = "none";

    document.getElementById("overlay-div").style.width = "0";

    document.getElementById("nav-links").style.width = "0";

}