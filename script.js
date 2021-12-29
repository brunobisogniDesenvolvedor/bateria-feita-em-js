document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
}); 

document.querySelector('.composer button').addEventListener('click', () => {
    let.song = document.querySelector('#input').value

    if (Son !== '') {
        let songArray = song.split(''); 
        playComposition(songArray); 
    }

})

function playSound(Sound) {
    let audioElement = document.querySelector(`#s_${Sound}`); 
    let keyElement  = document.querySelector(`div[data-key="${Sound}" ]`); 
    if (audioElement) {
        audioElement.play(); 
    }

    if (keyElement) {
        audioElement.currentTime =0; 
        keyElement.classList.remove('active');
        
        setTimeout(() => {
            keyElement.classList.remove('remove'); 
        }, 300); 
    }
}

function playComposition(songArray){
    let wait = 0; 

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, await); 

        wait += 250; 
    }
}

