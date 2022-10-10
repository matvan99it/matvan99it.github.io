
    
    const morty = document.getElementById('anchor');

    const rect = morty.getBoundingClientRect(); // il rettangolo di contorno all'immagine

    
    //cordinate per il centro dell'immagine
    const mortyx = rect.left + rect.width / 2;
    const mortyy = rect.top + rect.height / 2;
    var r = document.querySelector(':root');
    
    document.addEventListener('mousemove', (e)=>{
        
        const mousex = e.clientX;
        const mousey = e.clientY;
        
        const angleDeg = angle(mousex, mousey, mortyx, mortyy);
        //console.log(angleDeg);
        //r.setProperty('--angle', angleDeg);

    const eyes = document.querySelectorAll('.eye');

    eyes.forEach( (eye) => {
        //r.style.setProperty('--rotate', angleDeg);
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        morty.style.filter = `hue-rotate(${angleDeg}deg)`;
    });

});

/**Calcolo dell'angolo tra l'immagine di base e la posizione del mouse */
function angle(cx, cy, ex, ey){
    const dx = ex - cx;
    const dy = ey - cy;

    const rad = Math.atan2(dy, dx); //range (-PI, PI]
    const deg = rad * 180 / Math.PI; //rads to degs, range  (-180, 180]
    return deg;
}