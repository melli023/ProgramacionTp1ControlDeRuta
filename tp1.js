//Sanchez Mariana

//Parte 1:
let patente = prompt("Ingresar patente: ");
patente = limpiarPatente(patente);


function limpiarPatente(patente) {
    patente = patente.trim();
    patente = patente.toUpperCase();   
    return patente;
}

function validarPatente(patente) {
    if (patente.length >= 6 && patente.length <= 7) {
        return true;
    } else {
        return false;
    }
}

while (!validarPatente(patente)) {
    patente = prompt("Ingresar patente: ")
    patente = limpiarPatente(patente);
}

console.log(patente);
console.log(patente.length);
console.log(validarPatente(patente));



//Parte 2:


function pedirVelocidad() {
    let velocidad = Number(prompt("Ingresar velocidad: "));
    
    while (isNaN(velocidad) || velocidad < 0) {
        velocidad = Number(prompt("Ingresar velocidad: "));
    }
    return velocidad;
}

let velocidad = pedirVelocidad();
console.log(velocidad);


//Parte 3:
const LIMITE_VELOCIDAD = 110;

function calcularMulta(velocidad) {
    if (velocidad <= LIMITE_VELOCIDAD) {
        return 0;
    }
    else if (velocidad > LIMITE_VELOCIDAD && velocidad <= 130) {
        return 5000;
    }
    else {
        return 10000;
    }
}
let multa = calcularMulta(velocidad);

console.log(`Reporte: Vehículo [${patente}] iba a [${velocidad}] km/h. Multa: $[${multa}]`);