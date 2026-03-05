let input = document.querySelector('#passbox');
let slidervalue = document.querySelector('#slidervalue');
let slider = document.querySelector('#inputslider');
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#Uppercase');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let Btn = document.querySelector('#genBtn');

slidervalue.textContent=slider.value;

slider.addEventListener('input', ()=>{
    slidervalue.textContent=slider.value;
});

let upchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowchar ="abcdefghijklmnopqrstuvwxyz";
let Nums = "1234567890";
let syms="!@#$%^&*()+=~?";

Btn.addEventListener('click', ()=>{
    input.value = generatePassword();
});
   
function generatePassword(){
    let genPass="";
    let strpass="";
    strpass += uppercase.checked ? upchar : "";
    strpass += lowercase.checked ? lowchar : "";
    strpass += numbers.checked ? Nums : "";
    strpass += symbols.checked ? syms : "";
    
    if(strpass == "" || strpass.length=='0'){
        return genPass;
    }
    
    for(let i=0; i<slider.value; i++){
        genPass+= strpass.charAt((Math.random()*strpass.length));
    }
    return genPass;
}