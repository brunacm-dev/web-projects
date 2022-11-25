/*
##########
### V4 ###
##########
aproveitando dicas do leao e do felipe :)
*/

const moon = document.querySelector('.btn__icon__mode');
const mudaMode = document.querySelector('.moon__icon');
const mudaTxt = document.querySelectorAll('.txt');
const mudaBack = document.querySelector('body');
const mudaFooter = document.querySelector('.footer');
const mudaHeader = document.querySelector('.header__container');
const mudaIcons = document.querySelectorAll('.link__icon__social');
const mudaTxtBtn = document.querySelectorAll('.btn__project');

moon.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

/*

##########
### V3 ###
##########


const moon = document.querySelector('.btn__icon__mode');
const mudaMode = document.querySelector('.moon__icon');
const mudaTxt = document.querySelectorAll('.txt');
const mudaBack = document.querySelector('body');
const mudaFooter = document.querySelector('.footer');
const mudaHeader = document.querySelector('.header__container');
const mudaIcons = document.querySelectorAll('.link__icon__social');
const mudaTxtBtn = document.querySelectorAll('.btn__project');

moon.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

moon.addEventListener('click', () => {
    mudaBack.classList.toggle('dark');
    mudaFooter.classList.toggle('dark');
    mudaHeader.classList.toggle('dark');
    mudaMode.classList.toggle('dark');

    mudaTxt.forEach((txt) => {
        txt.classList.toggle('dark');
    });
    mudaIcons.forEach((icon) => {
        icon.classList.toggle('dark');
    });
    mudaTxtBtn.forEach((btn) => {
        btn.classList.toggle('dark');
    });
});


##########
### V2 ###
##########

-- ISSO DAQUI ESTÁ HORRENDOOOOOO - pedro

let isNightModeOn = false;

moon.addEventListener('click', () => {
    if (!isNightModeOn) {
        console.log('changing to night mode');
        mudaTxt.forEach((txt) => {
            txt.classList.replace('txt', 'txt__dark');
        });
        isNightModeOn = true;
    } else {
        console.log('changing to light mode');
        mudaTxt.forEach((txt) => {
            txt.classList.replace('txt__dark', 'txt');
        });
        isNightModeOn = false;
    }
});


##########
### V1 ###
##########

const textoMode = document.querySelector('.txt__mode');
const botaoMode = document.querySelectorAll('.btn__icon__mode');
const containerMode = document.querySelector('.header__container');
const socialIcon = document.querySelectorAll('.link__icon__social');
const menu = document.querySelector('.menu__item');
const footer = document.querySelector('.footer');
const nightModeOn = false;

botaoMode[0].addEventListener('click', () => {
    if (!(document.body.style.backgroundColor === 'var(--color-dark)')) {
        backgroundDark();
        txtLight();
        borderLight();
        iconLight();
        footerLight();
    }
});

// change to light-mode
botaoMode[1].addEventListener('click', () => {
    if (!(document.body.style.backgroundColor === 'var(--color-light)')) {
        backgroundLight();
        txtDark();
        borderDark();
        iconDark();
        footerDark();
    }
});

// mudança de background
function backgroundLight() {
    return (document.body.style.backgroundColor = 'var(--color-light)');
}
function backgroundDark() {
    return (document.body.style.backgroundColor = 'var(--color-dark)');
}

// mudança de txt
function txtLight() {
    return (textoMode.style.color = 'var(--color-light)');
}
function txtDark() {
    return (textoMode.style.color = 'var(--color-dark)');
}

// mudança de borda
function borderLight() {
    return (
        (containerMode.style.borderBottom = 'solid var(--color-light)') &&
        (containerMode.style.borderTop = 'solid var(--color-light)')
    );
}
function borderDark() {
    return (
        (containerMode.style.borderBottom = 'solid var(--color-dark)') &&
        (containerMode.style.borderTop = 'solid var(--color-dark)')
    );
}

// mudança de icons
function iconLight() {
    for (let i = 0; i < socialIcon.length; i++) {
        socialIcon[i].style.color = 'var(--color-light)';
    }
    return;
}

function iconDark() {
    for (let i = 0; i < socialIcon.length; i++) {
        socialIcon[i].style.color = 'var(--color-dark)';
    }
    return;
}

// mudança menu
function menuLight() {
    return (menu.style.color = 'red');
}

function menuDark() {
    return;
}

// mudança footer
function footerLight() {
    return (
        (footer.style.color = 'var(--color-dark)') &&
        (footer.style.backgroundColor = 'var(--color-light)')
    );
}

function footerDark() {
    return (
        (footer.style.color = 'var(--color-light)') &&
        (footer.style.backgroundColor = 'var(--color-dark)')
    );
}
*/
