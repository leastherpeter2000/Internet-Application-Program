/*===== Home Page - Video =====*/
function videoslider(links){
    document.querySelector(".slider").src = links;
}

/*===== Dark Mode =====*/

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'grey';
        body.style.transition = '2s';
    }else{
        body.style.background = 'grey';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

/*===== Sproduct =====*/

var MainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img");

smalling[0].onclick = function(){
    MainImg.src = smalling[0].src;
}

smalling[1].onclick = function(){
    MainImg.src = smalling[1].src;
}

smalling[2].onclick = function(){
    MainImg.src = smalling[2].src;
}

smalling[3].onclick = function(){
    MainImg.src = smalling[3].src;
}

/*==== NavBar (Mobile) ===*/

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

let buttons = document.querySelector('.buttons')
;
let btn = buttons.querySelectorAll('.btn');
for (var i =0; i <btn.lenght; i++){
    btn[i].addEventListener('click', function(){
        let current = document.
        getElementsByClassName('active');
        current[0].className = current[0].className.
        replace("active", "");
        this.className += " active";
    })
}

let ids = ["#h1", "#h2", "#h3", "#h4", "#h5", "#h6", "#h7", "#h1", "#h", "#h1", "#span", "#p"];
ids.forEach(id => {
    let el = document.querySelector(id);
    let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")
    fontSize = parseFloat(fontSize);

    if(type === "increase"){
        el.style.fontSize = (fontSize + 5) + "px";
    }else{
        el.style.fontSize = (fontSize - 5) + "px";
    }
})
