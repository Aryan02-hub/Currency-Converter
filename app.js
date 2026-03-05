const BASE_URL = "https://open.er-api.com/v6/latest/";
const dropdowns = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("button")
const fromCurr =document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector("#msg")


for(let select of dropdowns){
    for(currCode in countryList){
        //console.log(currCode, countryList[currCode]);
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        if(select.name === "from" && currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name === "to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element) =>{
    let currCode=element.value;
    let countryCode = countryList[currCode];
    let newSrclink=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img =element.parentElement.querySelector("img");
    img.src=newSrclink;
}

btn.addEventListener("click",async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtval = amount.value;
    if(amtval === "" || amtval<1){
        amtval=1;
        amount.value="1";
    }
    //const URL = `${BASE_URL}?amount=${amtval}&from=${fromCurr.value}&to=${toCurr.value}`
    //console.log(URL)
    const URL = `${BASE_URL}${fromCurr.value}`;
    let res = await fetch(URL)
    let data = await res.json()
    let rate = data.rates[toCurr.value]
    //console.log(rate)
    let finalAmt = amtval * rate
    msg.innerText =`${amtval} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`
})

window.addEventListener("load", () => {
    btn.click();
});

const swapBtn = document.querySelector(".fa-arrow-right-arrow-left");

swapBtn.addEventListener("click", () => {

    // currencies swap
    let temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    // flags update
    updateFlag(fromCurr);
    updateFlag(toCurr);

    // auto convert again
    btn.click();
});