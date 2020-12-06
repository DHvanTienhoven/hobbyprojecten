const hamburgerButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const background = document.getElementById("background");
const redButton = document.getElementById("red");
const orangeButton = document.getElementById("orange");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const indigoButton = document.getElementById("indigo");
const violetButton = document.getElementById("violet");
const unicorn = document.getElementById("unicorn");
const star = document.getElementById("star");
const smiley =document.getElementById("smiley");
const rainbow = document.getElementById("rainbow")

hamburgerButton.addEventListener("click", ()=>{
    menu.classList.toggle("visibleMenu");
    background.className="default-background";
    unicorn.classList.add("activeUnicorn")
})


redButton.addEventListener("click", ()=>{
    background.className="red-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

orangeButton.addEventListener("click", ()=>{
    background.className="orange-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

yellowButton.addEventListener("click", ()=>{
    background.className="yellow-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

greenButton.addEventListener("click", ()=>{
    background.className="green-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

blueButton.addEventListener("click", ()=>{
    background.className="blue-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

indigoButton.addEventListener("click", ()=>{
    background.className="indigo-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

violetButton.addEventListener("click", ()=>{
    background.className="violet-background";
    menu.classList.remove("visibleMenu");
    unicorn.classList.remove("activeUnicorn")
} )

rainbow.addEventListener("click", ()=>{
    rainbow.classList.toggle("activeRainbow");
})

star.addEventListener("click", ()=>{
    star.classList.toggle("activeStar");
})

smiley.addEventListener("click", ()=>{
    smiley.classList.toggle("activeSmiley");
})

unicorn.addEventListener("click", ()=>{
    unicorn.classList.toggle("activeUnicorn");
})