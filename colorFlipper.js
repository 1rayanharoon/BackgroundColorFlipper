let colors=['red','#8998d0','tomato','pink','#CD853F','grey','black','brown','rgba(249, 196, 60, 0.9)']
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



