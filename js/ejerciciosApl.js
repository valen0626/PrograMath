//arreglo con las respuestas
let correctas = [3,1,1,3,2,1];

//arreglo con respuestas guardadas
let opcion_elegida = [];
let cantidad_correctas = 0;

//función que toma numero de preguntas y el input elegido
function respuesta(num_pregunta, seleccionada) {
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs para cuando elige otra opción
    //id para seleccionar el section correspondiente
    id = "p"+num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //doy el color a label seleccionado
    seleccionada.parentNode.style.backgroundColor ="#a1d69a";
}

//funcion que compara los arreglos para saber la calificación
function calificar() {
    cantidad_correctas = 0;
    for (i=0; i < correctas.length; i++) {
        if (correctas[i]==opcion_elegida[i]) {
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}