function cifradoPorDesplazamiento(mensaje, clave, direccion, operacion) {
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

            if (direccion === 'derecha') {
                nuevoCodigo = (operacion === 'cifrar') ? ((codigo - 65 + clave) % 26) + 65 : ((codigo - 65 - clave + 26) % 26) + 65;
            } else if (direccion === 'izquierda') {
                nuevoCodigo = (operacion === 'cifrar') ? ((codigo - 65 - clave + 26) % 26) + 65 : ((codigo - 65 + clave) % 26) + 65;
            } else {
                throw new Error('Dirección no válida. Use "derecha" o "izquierda".');
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

// Cifrar hacia la derecha
const mensajeCifradoDerecha = cifradoPorDesplazamiento(mensajeOriginal, claveDeCifrado, 'derecha', 'cifrar');
console.log(`Mensaje Original: ${mensajeOriginal}`);
console.log(`Mensaje Cifrado hacia la derecha: ${mensajeCifradoDerecha}`);

// Descifrar hacia la izquierda
const mensajeDescifradoIzquierda = cifradoPorDesplazamiento(mensajeCifradoDerecha, claveDeCifrado, 'izquierda', 'descifrar');
console.log(`Mensaje Descifrado hacia la izquierda: ${mensajeDescifradoIzquierda}`);
