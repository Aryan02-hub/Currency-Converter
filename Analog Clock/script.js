const url = "https://jsonplaceholder.typicode.com/posts"
let fact = document.querySelector('#fact');
let facty = document.querySelector('#facty');

const getFacts = async()=>{
    console.log("getting your data......")
    let response = await fetch(url,"POST")
    console.log(response)
    let data = await response.json();
    console.log(data)
    
    fact.innerHTML = data.title;
    
}
facty.addEventListener("click", getFacts)

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         // console.log("data", dataId);
//         console.log("data", dataId)
//         resolve();
//     }, 2000)
//     })
    
// }

// getData(1).then((res)=>{
//     console.log("success....");
//     getData(34).then((res)=>{
//         console.log("re")
//         getData(98).then(res)
//     })
// })

// (async function(){
//     await getData(123);
//     await getData(1);
//     await getData(12);
//     await getData(1234);
//     return "done"; 
// })()


// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(8);
//     });
// })

