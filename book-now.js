window.onload = function() {
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

        if(window.innerWidth < 768) {
            forScreen.style.display = 'none';
            Icon.style.display = 'block';
        } else {
            forScreen.style.display = 'flex';
            Icon.style.display = 'none';
        }
    }

    if(window.innerWidth < 490) {
        document.querySelector(".grid").innerHTML = 
        `<label for="firstName">الاسم الأول</label>
        <input type="text" id="firstName" name="firstName" placeholder="الاسم الأول">
        <label for="lastName">الاسم الأخير</label>
        <input type="text" id="lastName" name="lastName" placeholder="الاسم الأخير">`
    } else {
        `<label for="firstName">الاسم الأول</label>
        <label for="lastName">الاسم الأخير</label>
        <input type="text" id="firstName" name="firstName" placeholder="الاسم الأول">
        <input type="text" id="lastName" name="lastName" placeholder="الاسم الأخير">`
    }

    let Q_icons = document.querySelectorAll(".Q-icon");
    let questions = document.querySelectorAll(".question");

    Q_icons.forEach((icon,index) => {
        icon.onclick = () => {
            questions[index].classList.toggle("open");
            icon.classList.replace("fa-plus", "fa-minus") || icon.classList.replace("fa-minus", "fa-plus");
        };
    });
}
