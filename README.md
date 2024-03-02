# Cifrado César
Cifrado Cesar por medio de JavaScript. Proyecto I del Curso de Criptografía de la Carrera de Seguridad de la Información de la Universidad Latina de Costa Rica

## ¿Qué es el Cifrado César?
El cifrado por desplazamiento, también conocido como cifrado César, es uno de los métodos de cifrado más simples y antiguos. Se basa en la idea de cambiar cada letra del mensaje original por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. Este número de posiciones se llama la "clave" del cifrado.

Aquí está cómo funciona el cifrado por desplazamiento:

1. **Elección de la Clave**:
Se elige un número entero, que actúa como la clave del cifrado. Este número determina cuántas posiciones se desplazarán las letras en el alfabeto.

2. **Proceso de Cifrado**:
Cada letra del mensaje original se desplaza hacia adelante en el alfabeto un número de posiciones igual a la clave.
Por ejemplo, con una clave de 3, la letra 'A' se convertiría en 'D', 'B' se convertiría en 'E', y así sucesivamente.

3. **Manejo de Espacios y Otros Caracteres**:
Los espacios y otros caracteres (puntuación, números, etc.) generalmente se dejan sin cambios durante el cifrado.

4. **Fórmula Matemática Simple**:
Si M representa la letra original y C la letra cifrada, la relación matemática simple es: C = (M + Clave) % 26.
El módulo 26 se utiliza porque hay 26 letras en el alfabeto inglés.

5. **Proceso de Descifrado**:
El proceso de descifrado es simplemente el reverso del cifrado. Cada letra cifrada se desplaza hacia atrás en el alfabeto por el mismo número de posiciones que la clave.

El cifrado por desplazamiento es fácil de entender y aplicar, pero es muy vulnerable a ataques de fuerza bruta debido a su simplicidad. Dado que hay un número limitado de posiciones en el alfabeto, un atacante podría probar todas las posibles claves para descifrar el mensaje.

Aunque el cifrado por desplazamiento no se utiliza comúnmente para asegurar comunicaciones sensibles en la actualidad, puede ser un buen punto de partida para entender los principios básicos de la criptografía.

## ¿Para qué sirve el Cifrado César?

Aunque no es seguro para aplicaciones modernas debido a su simplicidad, ha sido históricamente utilizado por diversas razones:

1. **Secreto Básico**:
El cifrado César proporciona un nivel básico de seguridad al ocultar el contenido del mensaje original. Es eficaz para mantener la confidencialidad de la información frente a personas no autorizadas que no conocen la clave de desplazamiento.

2. **Ejercicios Didácticos**:
Debido a su simplicidad, el cifrado César se utiliza a menudo en entornos educativos como un ejercicio didáctico para enseñar los conceptos fundamentales de la criptografía. Ayuda a los estudiantes a comprender cómo funciona el cifrado y cómo puede ser vulnerado.

3. **Juegos y Entretenimiento**:
En contextos lúdicos o juegos, el cifrado César puede utilizarse para agregar un elemento de desafío y diversión. Las personas pueden cifrar y descifrar mensajes como una actividad recreativa.

4. **Comunicaciones Informales**:
En situaciones donde la seguridad no es una preocupación crítica, el cifrado César puede utilizarse para comunicaciones informales o bromas entre amigos. Aunque es fácil de descifrar, puede añadir un toque de misterio a las interacciones.

5. **Historia y Cultura**:
El cifrado César tiene un valor histórico y cultural, ya que se cree que fue utilizado por Julio César para proteger mensajes militares. Su mención en la historia lo ha convertido en un símbolo de la criptografía clásica.

A pesar de estas aplicaciones históricas y educativas, es importante destacar que el cifrado César no proporciona seguridad significativa en entornos donde se requiere una protección más robusta de la información. Para aplicaciones serias y modernas, se prefieren algoritmos de cifrado más avanzados y seguros, como AES (Advanced Encryption Standard) o RSA (Rivest-Shamir-Adleman).

## ¿Cuáles son las ventajas y desventajas?
