const clock = document.querySelector("#clock");

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minute<10 ? `0${minute}`:minute}:${second<10 ? `0${second}`:second}`
}

function realTime(){
    setInterval(getTime, 1000);
}

realTime();