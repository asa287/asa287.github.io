function toggleMenu() {
    const menu = document.querySelector(".menu-links");        // a constant variable
                // a DOM API: enable to use the first element with the ".menu-links" (the whole element, from <div> to </div>)
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")  // target the constant: menu
    icon.classList.toggle("open")  
}