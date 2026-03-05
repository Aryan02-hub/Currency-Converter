let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let popup = document.querySelector('.popup');
btn1.addEventListener('click', (e)=> {
    popup.classList.add('active');
});

btn2.addEventListener('click', (e)=> {
    popup.classList.remove('active');
});
