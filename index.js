//  blocking inspect
document.oncontextmenu = () =>{
    alert("Do not try to right click")
    return false;
}

document.onkeydown = e=>{
    if (e.key == "F12"){
        alert("Don't try to inspect element")
        return false;
    }
    if(e.ctrlKey && e.key =="u"){
        alert("Don't try to copy page element")
        return false;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.carousel-items .item');

    function updateCarousel(index) {
        items.forEach((item, i) => {
            item.style.display = (i >= index && i < index + 5) ? 'inline-block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === Math.floor(index / 5));
        });
    }

    document.querySelector('.carousel-btn.left').addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel(currentIndex);
    });

    document.querySelector('.carousel-btn.right').addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, items.length - 5);
        updateCarousel(currentIndex);
    });

    updateCarousel(currentIndex);
});