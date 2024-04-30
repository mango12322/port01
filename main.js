var navbar__menu_icon = document.querySelector(`.navbar__menu_icon`);
var navbar = document.querySelector(`.navbar ul`);

var count = 0;
navbar__menu_icon.addEventListener(`click`, function() {
    if (count % 2 == 0) {
        navbar.style.display = `flex`;
    }
    else {
        navbar.style.display = `none`;
    }
    count++;
})