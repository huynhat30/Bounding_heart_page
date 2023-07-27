document.addEventListener("mousemove", function(e){
    const body = document.querySelector('body');
    const heartMouse = document.createElement('span');
    heartMouse.setAttribute('id', 'heartMosue');
    const x = e.offsetX;
    const y = e.offsetY;
    heartMouse.style.left = x + 'px';
    heartMouse.style.top = y + 'px';

    let size = Math.random() * 80;
    heartMouse.style.width = 20 + size + 'px';
    heartMouse.style.height = 20 + size + 'px';

    let rotateValue = Math.random() * 360;
    heartMouse.style.transform = 'rotate('+rotateValue+'deg)';

    body.appendChild(heartMouse);

    setTimeout(() => {
        heartMouse.remove();
    }, 1000);
})