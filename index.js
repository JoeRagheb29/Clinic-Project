window.onload = function() {
    console.log("Page loaded successfully! Initializing scripts...");
    let Icon = document.querySelector('.icon');
    let X = document.querySelector('.X');
    let forMobile = document.querySelector('.forMobile');
    let forScreen = document.querySelector('.forScreen');
    Icon.onclick = () => {
        forMobile.style.transform = 'translateX(0)';
        Icon.style.display = 'none';
    }

    X.onclick = () => {
        console.log('Clicked X');
        forMobile.style.transform = 'translateX(100%)';

        if(window.innerWidth < 972) {
            forScreen.style.display = 'none';
            Icon.style.display = 'block';
        } else {
            forScreen.style.display = 'flex';
            Icon.style.display = 'none';
        }
    }

    let video = document.querySelector('video');
    let play = document.querySelector('#video button');
    play.onclick = () => {
        video.play();
    }
}