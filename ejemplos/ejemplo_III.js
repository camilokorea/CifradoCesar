function cifradoCesar(mensaje, clave) {
    if (typeof mensaje !== 'string' || typeof clave !== 'number') {
        throw new Error('Entradas no válidas. El mensaje debe ser una cadena y la clave un número.');
    }

    const alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';

    const cifrarLetra = (letra, clave) => {
        const indice = alfabeto.indexOf(letra);
        if (indice === -1) {
            // Si no es una letra, mantener sin cambios
            return letra;
        }

        const nuevoIndice = (indice + clave + alfabeto.length) % alfabeto.length;
        return alfabeto.charAt(nuevoIndice);
    };

    let mensajeCifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
        const letraOriginal = mensaje.charAt(i);
        const letraCifrada = cifrarLetra(letraOriginal, clave);
        mensajeCifrado += letraCifrada;
    }

    return mensajeCifrado;
}

// Ejemplo de uso
// const mensajeOriginal = 'Hello, World!';
const mensajeOriginal = 'Hola Profesora!!!';
const clavePositiva = 3;
const claveNegativa = -3;

const mensajeCifradoPositivo = cifradoCesar(mensajeOriginal, clavePositiva);
const mensajeCifradoNegativo = cifradoCesar(mensajeOriginal, claveNegativa);

console.log(`Mensaje Original: ${mensajeOriginal}`);
console.log(`Mensaje Cifrado (Clave Positiva): ${mensajeCifradoPositivo}`);
console.log(`Mensaje Cifrado (Clave Negativa): ${mensajeCifradoNegativo}`);
