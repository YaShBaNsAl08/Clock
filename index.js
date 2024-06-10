setInterval(() => {
    date = new Date();
    Htime = date.getHours();
    Mtime = date.getMinutes();
    Stime = date.getSeconds();
    Hrotation = 30*Htime + Mtime/2;
    Mrotation = 6*Mtime;
    Srotation = 6*Stime;

    hour.style.transform = `rotate(${Hrotation}deg)`;
    minute.style.transform = `rotate(${Mrotation}deg)`;
    second.style.transform = `rotate(${Srotation}deg)`;
}, 1000);