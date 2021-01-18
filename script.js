const birthday = "6 Feb 2021";

function countdown(){
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const remainingTime = birthDate - currentDate;
    const days = parseInt(remainingTime / 86400000 % 31);
    const hours = parseInt(remainingTime / 3600000 % 24);
    const minutes = parseInt(remainingTime/60000%60);
    const seconds = parseInt(remainingTime/1000)%60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);

    function format(time){
        return time < 10 ? `0${time}` : time;
    }
    
    
}

countdown();

setInterval(countdown,1000);
