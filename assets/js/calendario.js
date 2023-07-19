---
---

window.onload = agregarTPsYParcialitosACalendario;
function agregarTPsYParcialitosACalendario(desde, hasta) {
    var tabla = document.getElementById("tabla-calendario");
    var trabajos_y_parciales = [];

    {% for p in site.data.parciales %}{% assign parcial = p[1] %}
        var dtEntrega = new Date("{{parcial.fecha}}");
        trabajos_y_parciales.push([diadelasemana(dtEntrega),dtEntrega,"{{parcial.label}}"]);
    {% endfor %}

    trabajos_y_parciales.sort(byDate);

    trabajos_y_parciales.forEach(
        function(item){
            var fila = document.createElement("tr");
            fila.innerHTML += "<td>" + item[0] + "</td>";
            fila.innerHTML += "<td>" + prettyfecha(item[1]) + "</td>";
            fila.innerHTML += "<td>" + item[2] + "</td>";
            tabla.appendChild(fila);
        }
    );

    return trabajos_y_parciales;
}

function diadelasemana(fecha){
    var numero = fecha.getDay();
    if (numero == 0) return 'Lunes'
    if (numero == 4) return 'Viernes'
}

function prettyfecha(fecha){
    return fecha.getUTCDate() + '/' + (fecha.getUTCMonth()+1) + '/' + (fecha.getFullYear());
}

function byDate(a,b) {
    return a[1] - b[1];
}
