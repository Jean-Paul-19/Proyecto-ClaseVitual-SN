var contador = 1;
var temporizador;

function iniciar(){
    // Verificamos si ya hay un temporizador corriendo antes de crear uno nuevo
    if (!temporizador) {
        temporizador = setInterval(rotarImagenes, 3000);
    }
}

function parar(){
    // Limpiamos el temporizador y ponemos la variable en null para indicar que no hay temporizador activo
    clearInterval(temporizador);
    temporizador = null;
}

function rotarImagenes(){
    if (contador >= 10) {
        contador = 0;
    }
    var img = document.getElementById('imgSlide');
    img.src = './images/img' + ++contador + '.jpg';
}
