// ################## Initiate Vanilla Tilt ##################

VanillaTilt.init(
  document.querySelectorAll(".js-tilt"), {
    max: 25,
    speed: 400,
  }
);

// ################## Color the active nav link ##################

const navLinks = document.getElementsByClassName('nav-link');

var path = window.location.pathname;
path = path.split("/").pop();
path = path.split(".")[0];
const activeLink = document.getElementById(path);

if (activeLink) {
    activeLink.classList.add('active');
    // Remove the nav-link-active from the other links
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i] !== activeLink) {
            navLinks[i].classList.remove('active');
        }
    }
}
