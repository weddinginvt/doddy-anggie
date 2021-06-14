// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".hari").innerHTML = days;
    document.querySelector(".jam").innerHTML = hours;
    document.querySelector(".menit").innerHTML = minutes;
    document.querySelector(".detik").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".hari").innerHTML = '0';
        document.querySelector(".jam").innerHTML = '0';
        document.querySelector(".menit").innerHTML = '0';
        document.querySelector(".detik").innerHTML = '0';
    }
}, 1000);