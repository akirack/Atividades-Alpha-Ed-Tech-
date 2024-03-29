const sound = document.getElementById('sound');

const img = document.querySelector('#img');
img.addEventListener('click', imgTouch);
img.setAttribute('src', "./img/bomb.png");

function imgTouch() {
    img.setAttribute('src', "./img/bomb-off.png");
    timer.cancel();
}

const timer = {
    setup: function() {
        this.timeoutID = setTimeout(() => {
            explode()
        }, "10000");
    },

    cancel: function() {
        clearTimeout(this.timeoutID);
    }
}

function explode(){
    img.setAttribute('src', "./img/explo.png");
    
    let promise = sound.play();

    if (promise !== undefined) {
        promise.then(_ => {
          
        }).catch(error => {
            const music = new Audio('./audio/explosion-01.ogg');
            music.play();
        });
    }
}

timer.setup();
