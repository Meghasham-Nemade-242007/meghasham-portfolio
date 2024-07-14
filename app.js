const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%'
}

document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById('animate-text');
    const text = "Meghasham ";
    const spanText = "Nemade";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        } else if (index < text.length + spanText.length) {
            if (index === text.length) {
                heading.innerHTML += "<span id='temp-span' style='color: aqua;'></span>";
            }
            document.getElementById('temp-span').innerHTML += spanText.charAt(index - text.length);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    }

    typeEffect();
});
