let colors=['red','green','tomato','pink','orange','grey','black','brown']
let colorEl=document.getElementById("color-el")
let btn=document.getElementById("btn")


btn.addEventListener("click", function () {
    console.log("button clicked")
    let randomIndex=Math.floor(Math.random()*colors.length)
    let randomColor=colors[randomIndex]
    document.getElementById('main').style.backgroundColor=randomColor
    colorEl.textContent=randomColor
    console.log(randomColor)
});



