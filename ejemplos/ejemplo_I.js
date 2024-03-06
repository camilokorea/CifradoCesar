function cifradoPorDesplazamiento(mensaje, clave, operacion) {
    // Verificar si la clave es un número positivo
    if (typeof clave !== 'number' || clave <= 0) {
        throw new Error('La clave debe ser un número entero positivo.');
    }

    // Convertir el mensaje a mayúsculas para simplificar el cifrado
    mensaje = mensaje.toUpperCase();

    let resultado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];

        if (char.match(/[A-Z]/)) {
            let codigo = mensaje.charCodeAt(i);
            let nuevoCodigo;

            if (operacion === 'cifrar') {
                nuevoCodigo = ((codigo - 65 + clave) % 26) + 65;
            } else if (operacion === 'descifrar') {
                nuevoCodigo = ((codigo - 65 - clave + 26) % 26) + 65;
            } else {
                throw new Error('Operación no válida. Use "cifrar" o "descifrar".');
            }

            let nuevoChar = String.fromCharCode(nuevoCodigo);
            resultado += nuevoChar;
        } else {
            resultado += char;
        }
    }

    return resultado;
}

// Ejemplo de uso
const mensajeOriginal = 'HELLO WORLD';
const claveDeCifrado = 3;

// Cifrar el mensaje
const mensajeCifrado = cifradoPorDesplazamiento(mensajeOriginal, claveDeCifrado, 'cifrar');
console.log(`Mensaje Original: ${mensajeOriginal}`);
console.log(`Mensaje Cifrado: ${mensajeCifrado}`);

// Descifrar el mensaje
const mensajeDescifrado = cifradoPorDesplazamiento(mensajeCifrado, claveDeCifrado, 'descifrar');
console.log(`Mensaje Descifrado: ${mensajeDescifrado}`);
