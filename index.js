window.onload=()=>{
    let about = document.getElementById("about");
    
    window.onscroll=()=>{
        if(window.scrollY <= about.offsetTop + 10 && window.scrollY >= about.offsetTop-100){
            about.childNodes[1].style.transform = "translateY(0)";
        }
    }
}