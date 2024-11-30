const navbar = document.getElementById("navigation");
const sticky = navbar.offsetTop;

function stickynavbar() {
    console.log(window.scrollY)
    window.scrollY >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

window.onscroll = stickynavbar