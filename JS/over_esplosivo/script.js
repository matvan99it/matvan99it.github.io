
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const enhance = (id) => {
    const element = document.getElementById(id);
    const text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    //transform: translate(50%, -10%) rotate(-3deg);
    let rand1 = rand(-80, 120);
    let rand2 = rand(-50, 60);
    let rand3 = rand(-50, 60);
    inner.animate({
        transform: `translate(${rand1}%, ${rand2}%)`
    }, {
        duration: 1200, fill: 'both'
    });

    outer.animate({
        transform: `translate(${rand1}%, ${rand2}%) rotate(${rand3}deg)`
    }, {
        duration: 1200, fill: 'both'
    });

    letter.animate({
        transform: `translate(${rand1}%, ${rand2}%)`
    }, {
        duration: 1200, fill: 'both'
    });

    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

