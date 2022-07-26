const snbMenu = document.querySelector(".submenu");
const snbBtn = document.querySelector("#snb .btn_menu");
const xBtn = document.querySelector(".submenu .xmark")

snbBtn.addEventListener("click", function() {
    if(snbMenu.classList.contains("hide")){
        snbMenu.classList.remove("hide");
        snbBtn.classList.add("hide");
    }
})

xBtn.addEventListener("click", function() {
    if(!snbMenu.classList.contains("hide")){
        snbMenu.classList.add("hide");
        snbBtn.classList.remove("hide");
    }
})