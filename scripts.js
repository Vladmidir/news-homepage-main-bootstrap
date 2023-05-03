//Add aria-expended?


/**
 * Sets mobile menu buttons' and nav-link's classes according to the screensize.
 */
function displayButtons(){
    closeBtn = document.getElementById("close-button");
    openBtn = document.getElementById("open-button");
    navLinks = document.getElementById("nav-links");
    //hide buttons, and reset nav-links classes (need to get rid off closed-menu class)
    if (window.innerWidth >= 1200) { //gotta use window.innerWidth instead of window.scree.width as the latter is constant
        closeBtn.className = "btn d-none";
        openBtn.className = "btn d-none";
        navLinks.className = "nav navbar navbar-right list-group";
    }
    //show buttons and set menu as closed
    else {
        openBtn.className = "btn d-inline";
        closeBtn.className = "btn d-none";
        navLinks.className = "nav navbar navbar-right list-group closed-menu";
    }
}

window.onload = () => {
    displayButtons();
};

window.onresize = () => {
    displayButtons();
};

/**
 * Opens the side menu on mobile.
 */
function openMenu() {
    //hide the open button
    document.getElementById("open-button").className = "btn d-none";
    //show the menu
    document.getElementById("nav-links").className = "nav navbar navbar-right list-group open-menu";
    document.getElementById("overlay-div").className = "open-overlay-div";
    //show the close button
    document.getElementById("close-button").className = "btn d-inline";
    //disable scroll
    document.body.className = "container disable-scroll";
}

/**
 * Closes the side menu on mobile.
 */
function closeMenu() {
    //show the open button
    document.getElementById("open-button").className = "btn d-inline";
    //hide the menu
    document.getElementById("nav-links").className = "nav navbar navbar-right list-group closed-menu";
    document.getElementById("overlay-div").className = "closed-menu";
    //hide the close button
    document.getElementById("close-button").className = "btn d-none";
    //enable scroll
    document.body.className = "container";
}