const snbMenu = document.querySelector("#snb .submenu");
const snbBtn = document.querySelector("#snb .btn_menu");

snbBtn.addEventListener("click", function() {
    if(snbMenu.classList.contains("hide")) snbMenu.classList.remove("hide");
    else snbMenu.classList.add("hide");
})