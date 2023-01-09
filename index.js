const Menu = document.getElementById('menu');
const ul_list = document.getElementById('ul_list');


Menu.addEventListener("click",()=>{
    ul_list.classList.toggle("move-left")
});

 