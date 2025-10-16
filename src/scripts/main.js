AOS.init();

const eventDate = new Date("2027-12-12T19:00:00");
const timestampEvent = eventDate.getTime();

const countTime = setInterval(function() {
    const now = new Date();
    const timestampNow = now.getTime();

    const timeLeft = timestampEvent - timestampNow;

    const daysTimeLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursTimeLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesTimeLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsTimeLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${daysTimeLeft}d ${hoursTimeLeft}h ${minutesTimeLeft}min ${secondsTimeLeft}s`;

    if (timeLeft < 0) {
        clearInterval(countTime);
        countdownElement.innerHTML = "O evento começou!";
    }

}, 1000);