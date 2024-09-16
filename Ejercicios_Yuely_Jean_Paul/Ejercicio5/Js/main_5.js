function cambiarColor(color){
    // Cambia el color del elemento con id "rojo" a rojo si el parámetro es 'rojo', de lo contrario, lo pone gris.
    document.getElementById("rojo").style.backgroundColor = color === 'rojo' ? 'red' : 'grey';

    // Cambia el color del elemento con id "amarillo" a amarillo si el parámetro es 'amarillo', de lo contrario, lo pone gris.
    document.getElementById("amarillo").style.backgroundColor = color === 'amarillo' ? 'yellow' : 'grey';

    // Cambia el color del elemento con id "verde" a verde si el parámetro es 'verde', de lo contrario, lo pone gris.
    document.getElementById("verde").style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}

function iniciarSemaforo(){
    // Inicia el ciclo del semáforo cambiando el color a rojo de inmediato.
    setTimeout(() => cambiarColor('rojo'), 0);

    // Cambia a amarillo después de 3 segundos.
    setTimeout(() => cambiarColor('amarillo'), 3000);

    // Cambia a verde después de 6 segundos.
    setTimeout(() => cambiarColor('verde'), 6000);

    // Reinicia el ciclo del semáforo después de 9 segundos.
    setTimeout(iniciarSemaforo, 9000);
}
