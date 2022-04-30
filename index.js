function carga() { 

    let iniDate = new Date("April 27, 2022 12:10:00");

    s = document.getElementById('segundos');
    m = document.getElementById('minutos');
    h = document.getElementById('horas');
    d = document.getElementById('dias');

    window.setInterval(function() {
        let vendDate = new Date();
        var timeMilisDif = vendDate.getTime() - iniDate.getTime();

        var se = Math.round(timeMilisDif / 1000);
        var day = Math.floor(se / (24 * 3600)); // Math.floor () redondea hacia abajo 
        var hour = Math.floor((se - day * 24 * 3600) / 3600);
        var minute = Math.floor((se - day * 24 * 3600 - hour * 3600) / 60);
        var second = se - day * 24 * 3600 - hour * 3600 - minute * 60; 

        s.innerHTML = second < 10 ? "0" + second : second;
        m.innerHTML = minute < 10 ? "0" + minute : minute;
        h.innerHTML = hour < 10 ? "0" + hour : hour;
        d.innerHTML = day < 10 ? "0" + day : day;

    }, 1000)
    
}