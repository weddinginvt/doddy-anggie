var mobileRes = window.matchMedia("(max-width: 600px)");
function myFunction(x) {
    if (x.matches) {
        document.getElementById('panel2').classList.add('timeline-inverted');
        document.getElementById('panel4').classList.add('timeline-inverted');
    } else {
        document.getElementById('panel2').classList.remove('timeline-inverted');
        document.getElementById('panel4').classList.remove('timeline-inverted');
    }
}

myFunction(mobileRes);
mobileRes.addListener(myFunction);