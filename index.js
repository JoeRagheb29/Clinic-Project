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

    function stat_function() {
        let Nums = document.querySelectorAll("#stat .num");
        let targetNums = [5,10,5000,95,25];
        const steps = 100; //عشان احنا مش هنخلي الخطوة بتاعتنا بواحد زي ما بنعمل 
        Nums.forEach((num , index)=> {
            let currentNum = 0;
            let targetNum = targetNums[index];
            const increment = targetNum / steps; // قيمة الزيادة في كل خطوة
            setInterval(()=> {
                if(currentNum < targetNum){
                    currentNum += increment;
                    index == 3? num.innerHTML = Math.ceil(currentNum) + "%" : num.innerHTML = "+" + Math.ceil(currentNum)
                }
                 else {
                    clearInterval();
                    index == 3? num.innerHTML = targetNum + "%" : num.innerHTML = "+" + targetNum;
                }
            }, 30);
        })
    }
    
    let hasScrolled = false;
    window.addEventListener("scroll", () => {
        if(window.scrollY >= 1700 && !hasScrolled) {
            console.log("Window is in the middle of the screen!");
            stat_function();
            hasScrolled = true;
        }
    })
}