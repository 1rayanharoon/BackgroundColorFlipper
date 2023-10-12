let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let colorEl=document.getElementById("color-el")
let btn=document.getElementById("btn")


btn.addEventListener("click", function () {
    let hex="#"
    for(let i=0;i<6;i++){
        hex+=arr[Math.floor(Math.random()*arr.length)]
    }

    document.getElementById('main').style.backgroundColor=hex
    colorEl.textContent=hex
    console.log(hex)
});



