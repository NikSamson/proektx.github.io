const menu = document.querySelector('.menu__header')
const menuBtn = document.querySelector('.header__menu-btn')
const menuList = document.querySelector('.menu__navigation-link')


if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('open')
        menuBtn.classList.toggle('open')
    })

function handleMenu () {
    
    
    menuList.classList.toggle('menuList')
}


}

/*===========================================*/







document.addEventListener("click", hidePopup);



function hidePopup(el)
{
let targetInside = menu.contains(el.target);
if(!targetInside) {
menuList.classList.add()


}


}


/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

