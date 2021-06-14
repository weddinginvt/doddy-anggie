$(document).ready(function () { $('#btnup').fadeOut(); });
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var btnup = $('#btnup');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnup.fadeIn("slow", "linear");
    } else {
        btnup.fadeOut("slow", "linear");
    }

}

function onTop() {
    $("html, body").animate({ scrollTop: 0 }, 0);
}




