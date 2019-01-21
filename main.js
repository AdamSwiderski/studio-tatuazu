const burger = document.querySelector(".burger");
const iconSkull = document.querySelector(".fa-skull");
const iconSkullX = document.querySelector(".fa-skull-crossbones");
const nav = document.querySelector(".navi");

burger.addEventListener("click", function () {
    iconSkull.classList.toggle("show");
    iconSkullX.classList.toggle("show");
    nav.classList.toggle("active");
});

function scroll(e) {
    var href = $(this).attr('href');

    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);

    location.hash = href;
}

$('a[href^="#"]').click(scroll);

