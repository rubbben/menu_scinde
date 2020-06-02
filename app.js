const btn = document.querySelector('.btn');
const menu = document.querySelector('.conteneurMenu');
const menuListItem = document.querySelectorAll('.menuListItem');
const iconeMenu = document.querySelector('.menuIcon');
let i = 0;

const TL = new TimelineMax({paused: true});

TL.to(menu,1,{width:'25%'}).staggerTo(menuListItem,0.3,{opacity: 1, x: 0}, 0.2, '-=0.75');

btn.addEventListener('click', () => {

    if(i === 0){
        i++;
        TL.play();
        iconeMenu.src = 'croix-icon.svg';
    } else {
        i--;
        TL.reverse();
        iconeMenu.src = 'menu-icon.svg';
    }

});

menuListItem.forEach(item => item.addEventListener('click', () => {
    i--;
    TL.reverse();
    iconeMenu.src = 'menu-icon.svg';
}));