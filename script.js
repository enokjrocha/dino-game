const dino = document.querySelector('.dino');

const handleKeyUp = (event) => {
    if (event.keyCode === 32){
        jump();
    }
}

const jump = () => {
    let position = 0;
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                } else {
                    position -= 8;
                    dino.style.bottom = position + 'px';
                }
            })
        }else{
            position += 8;
            dino.style.bottom = position + 'px';
        }
    }, 20)
}


document.addEventListener('keyup', handleKeyUp);