
function carga() { 

    contador_s = 0;
    contador_m = 0;
    contador_h = 0;
    contador_d = 0;

    s = document.getElementById('segundos');
    m = document.getElementById('minutos');
    h = document.getElementById('horas');
    d = document.getElementById('dias');


    window.setInterval(function() {
        //console.log(contador_s);

        if (contador_s==60) {
            contador_m++;
            m.innerHTML = contador_m < 10 ? "0" + contador_m : contador_m;
            contador_s = 0;
        }

        if (contador_m==60) {
            contador_h++;
            contador_m = 0;
            h.innerHTML = contador_h < 10 ? "0" + contador_h : contador_h;
        }

        if (contador_h == 24) {
            contador_d++;
            contador_h = 0;
            d.innerHTML = contador_d < 10 ? "0" + contador_d : contador_d;
        }

        s.innerHTML = contador_s < 10 ? "0" + contador_s : contador_s;
        contador_s++;

    }, 1000)
    
}