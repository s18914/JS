const setTimer = () => {

    let seconds = 0;

    function plusNumber() {
        seconds++;
        document.querySelector('div').textContent = seconds;
    }
    
    return plusNumber;
}

const timer = setTimer();

setInterval(timer, 1000);