let source = "./music/I-Knew-I-Loved-You-Savage-Garden-Piano-Cover-by-Riyandi-Kusuma.mp3";
let audio = new Audio();

audio.addEventListener("load", function () {
    audio.play();
}, true);

audio.src = source;
audio.autoplay = true;
audio.loop = true;

let btnToggleMusik = document.getElementById("btnToggleMusic");

btnToggleMusik.addEventListener("click", function () {
    let status = btnToggleMusik.getAttribute("data-status");
    let ipause = document.getElementById("iPause");
    let iplay = document.getElementById("iPlay");
    let marqueeMusic = document.getElementById("marqueeMusic");

    if (status == "play") {
        btnToggleMusik.setAttribute("data-status", "stop");
        ipause.classList.replace('d-block', 'd-none');
        iplay.classList.replace('d-none', 'd-block');
        marqueeMusic.stop();
        audio.pause();
    } else if (status == "stop") {
        btnToggleMusik.setAttribute("data-status", "play");
        ipause.classList.replace('d-none', 'd-block');
        iplay.classList.replace('d-block', 'd-none');
        marqueeMusic.start();
        audio.play();
    } else {
        btnToggleMusik.setAttribute("data-status", "play");
        ipause.classList.replace('d-none', 'd-block');
        iplay.classList.replace('d-block', 'd-none');
        marqueeMusic.start();
        audio.play();
    }
});

function closeCover() {
    document.querySelector('html').style.overflowY = "visible";
    document.getElementById("coverBg").classList.add('animate__animated', 'animate__fadeOutDown');
    audio.play();
}
