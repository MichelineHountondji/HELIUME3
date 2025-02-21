const nav = document.querySelector('.navbar');

window.addEventListener(('scroll'),(e)=>{
    if(window.scrollY){
        nav.style.backgroundColor = "blue";
        nav.style.transition = "1.5s";
    }
    else{
        nav.style.backgroundColor= "transparent";
    }
})