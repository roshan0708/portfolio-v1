function myFuntion(){
    $("#loader").css("display","none");
}
$(document).ready((e)=>{
    $win = $(window);
    $navbar = $("#header");
    $toggle = $(".toggle-button");
    let width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    //resize event
    $win.resize(() => {
        toggle_onclick($win,$navbar,width);
    });

    $toggle.click((e) => {
        $navbar.toggleClass("toggle-left");
    })
});

const toggle_onclick= ($win,$navbar,width) => {
    if($win.width() < 768) {
        $navbar.css({left:"-200px"});
    }else{
        $navbar.css({left:"0px"});
    }
}

//typing-effect
let typed = new Typed("#typed",{
    strings:[
        "Web Developer",
        "Programmer"
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    loopCount:Infinity,
});

//smooth-navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//particles.js
particlesJS.load('home', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
