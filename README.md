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
El cifrado César, a pesar de su simplicidad, tiene algunas ventajas y desventajas. Aquí hay una descripción de ambas:

### Ventajas del Cifrado César:

1. **Simplicidad:**
El cifrado César es fácil de entender y aplicar. Es un algoritmo simple que implica el desplazamiento de caracteres en el alfabeto, lo que facilita su implementación y comprensión.

2. **Eficiencia Computacional:**
Debido a su simplicidad, el cifrado César es computacionalmente eficiente. Es adecuado para situaciones en las que la velocidad de cifrado y descifrado es más crítica que la seguridad.

3. **Aplicaciones Didácticas:**
El cifrado César se utiliza comúnmente con fines educativos para enseñar conceptos básicos de criptografía y seguridad. Es un buen punto de partida para entender los principios fundamentales del cifrado.

### Desventajas del Cifrado César:
1. **Baja Seguridad:**
La principal desventaja del cifrado César es su baja seguridad. Dado que solo implica un desplazamiento simple en el alfabeto, es vulnerable a ataques de fuerza bruta y otros métodos de criptoanálisis.

2. **Longitud de Clave Fija:**
La clave en el cifrado César es el número de posiciones que se desplazan en el alfabeto. Debido a que la longitud de la clave es fija, esto facilita aún más los ataques, ya que solo hay 25 posibles claves (siendo 26 el total de letras en el alfabeto inglés).

3. **Patrones de Lenguaje:**
El cifrado César no oculta patrones de lenguaje. Si una letra específica se cifra como 'A', siempre se cifrará como 'A' en cualquier parte del mensaje, lo que facilita la identificación de patrones.

4. **Inseguro para Aplicaciones Serias:**
No se recomienda para aplicaciones donde la seguridad es una preocupación crítica. En contextos modernos, hay algoritmos de cifrado más seguros y avanzados disponibles.

En resumen, el cifrado César es una herramienta didáctica valiosa y puede tener aplicaciones lúdicas, pero no es adecuado para proteger información sensible debido a su baja seguridad. En la práctica, se prefieren otros métodos de cifrado más avanzados y robustos.

## ¿Cuándo se utiliza el Cifra César?
El cifrado César se utiliza en situaciones donde se requiere una seguridad muy básica o donde la simplicidad y la facilidad de implementación son más importantes que la seguridad real. Aunque no es adecuado para aplicaciones modernas y seguras, el cifrado César tiene algunas áreas de aplicación, principalmente didácticas y recreativas. Aquí hay algunas situaciones en las que podría utilizarse:

1. **Educación en Criptografía:**
El cifrado César se utiliza comúnmente en entornos educativos como un ejemplo introductorio de criptografía. Ayuda a los estudiantes a comprender conceptos básicos como la sustitución y la clave.

2. **Juegos y Entretenimiento:**
En juegos, rompecabezas o actividades recreativas, el cifrado César puede utilizarse para agregar un elemento de desafío o misterio. Las personas pueden cifrar mensajes entre sí como parte de un juego o pasatiempo.

3. **Comunicaciones Informales:**
En situaciones donde la seguridad no es una preocupación crítica, el cifrado César puede utilizarse para comunicaciones informales o intercambio de mensajes entre amigos. Esto podría ser aplicable en entornos en los que la principal intención es divertirse más que proteger la información.

4. **Pruebas de Seguridad Básicas:**
A veces, el cifrado César puede utilizarse en entornos de prueba o demostraciones de seguridad básicas para ilustrar la vulnerabilidad de métodos de cifrado más simples frente a ataques de fuerza bruta.

5. **Códigos Secretos Simples:**
En situaciones informales donde se busca la simplicidad, como en actividades infantiles o eventos familiares, el cifrado César puede ser utilizado para crear códigos secretos simples y divertidos.

En resumen, el cifrado César no se utiliza en aplicaciones donde se requiera una seguridad significativa debido a sus limitaciones en términos de robustez y resistencia a ataques. Sin embargo, sigue siendo relevante en contextos educativos y recreativos donde la simplicidad y la comprensión de los principios básicos de la criptografía son los objetivos principales.

## ¿En qué se utiliza el Cifra César?
El cifrado César se utiliza principalmente con fines educativos y recreativos debido a su simplicidad y falta de seguridad robusta. Aquí hay algunas situaciones específicas en las que el cifrado César puede ser aplicado:

1. **Educación en Criptografía:**
El cifrado César es a menudo utilizado como un ejemplo introductorio en cursos de criptografía para enseñar conceptos básicos de sustitución y cifrado por desplazamiento.

2. **Ejercicios Didácticos:**
En entornos educativos, los profesores pueden asignar ejercicios que impliquen el cifrado y descifrado César para ayudar a los estudiantes a comprender los fundamentos de la criptografía.

3. **Desarrollo de Habilidades de Programación:**
Al implementar el cifrado César, los estudiantes de programación pueden practicar y mejorar sus habilidades de codificación, ya que es un algoritmo simple pero útil.

4. **Pruebas y Demostraciones:**
En demostraciones de seguridad o pruebas básicas, el cifrado César puede utilizarse para ilustrar los conceptos de vulnerabilidades en métodos de cifrado más simples frente a ataques de fuerza bruta.

5. **Juegos y Rompecabezas:**
En juegos, rompecabezas o actividades recreativas, el cifrado César puede ofrecer un elemento de desafío. Por ejemplo, los participantes pueden recibir mensajes cifrados que deben descifrar para avanzar en el juego.

6. **Comunicaciones Informales y Divertidas:**
En situaciones informales entre amigos o familiares, las personas pueden usar el cifrado César para intercambiar mensajes de manera divertida y creativa.

7. **Exploración de Conceptos Criptográficos:**
Aunque el cifrado César es relativamente simple, su uso puede ayudar a las personas a explorar conceptos criptográficos, como la importancia de las claves y la vulnerabilidad a ciertos tipos de ataques.

Es importante destacar que el cifrado César no es adecuado para aplicaciones en las que la seguridad es una prioridad, ya que es vulnerable a ataques de fuerza bruta y criptoanálisis básicos. En contextos donde se requiere seguridad real, se prefieren algoritmos de cifrado más avanzados y seguros.