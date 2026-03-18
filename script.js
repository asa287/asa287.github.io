function toggleMenu() {
    const menu = document.querySelector(".menu-links");        // a constant variable
                // a DOM API: enable to use the first element with the ".menu-links" (the whole element, from <div> to </div>)
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")  // target the constant: menu
    icon.classList.toggle("open")  
}

function toggleLanguage() {
    let currentLang = document.documentElement.lang === 'en' ? 'zh' : 'en';
    const elements = document.querySelectorAll('[data-zh]');
    
    elements.forEach(el => {
        // Save the original English text if it hasn't been saved yet
        if (!el.dataset.en) {
            el.dataset.en = el.innerHTML;
        }
        
        // Swap the innerHTML depending on the current language
        if (currentLang === 'zh') {
            el.innerHTML = el.dataset.zh;
        } else {
            el.innerHTML = el.dataset.en;
        }
    });

    // Update the HTML lang attribute
    document.documentElement.lang = currentLang;
}