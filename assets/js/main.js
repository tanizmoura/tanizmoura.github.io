
async function setActive(type) {

    const nav = document.getElementById(`nav-${type}`);
    const navItems = nav.children;
    let activeItem = nav.querySelector(`.active-${type}`);

    Array.from(navItems).forEach((item) => {
        item.addEventListener('click', () => {
            activeItem.classList.remove(`active-${type}`)
            item.classList.add(`active-${type}`)
            activeItem = item
            activePage = item.children.item(0).href.split('#')[1]
            console.log(activePage)
        })        
    })
    
}

(async () => {

    await setActive('mobile');
    await setActive('lg');
    
})()





