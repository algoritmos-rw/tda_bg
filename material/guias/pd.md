---
math: true
---

# Programación Dinámica
{:.no_toc}


## Contenidos
{:.no_toc}

1. TOC
{:toc}


## Ejercicio resuelto

### Solución

#### Demostración del orden

## Ejercicios propuestos

1.  (★★★) Sea G un grafo dirigido “camino” (las aristas son de la forma _(vi, vi+1))_. Cada vertice tiene un valor (positivo). 
    Implementar un algoritmo que, utilizando programación dinámica, obtenga el conjunto de vértices que den una suma máxima 
    dentro de un grafo de dichas características, con la condición de que no se pueden seleccionar dos vértices adyacentes entre sí.
    Indicar y justificar la complejidad del algoritmo implementado.

1.  (★★★) Dado un número **K**, se quiere obtener la mínima cantidad de operaciones para llegar desde 0 a K, siendo que las 
    operaciones posibles son: (i) aumentar el valor del operando en 1; (ii) duplicar el valor del operando.
    Implementar un algoritmo que, por programación dinámica obtenga la menor cantidad de operaciones a realizar (y cuáles son 
    dichas operaciones). Desarrollar la ecuación de recurrencia. Indicar y justificar la complejidad del algoritmo implementado.
    Aclaración: asegurarse de que el algoritmo presentado sea de programación dinámica, con su correspondiente ecuación de recurrencia.

1.  (★★★) Un bodegón tiene una única mesa larga con **W** lugares. Hay una persona en la puerta que anota los grupos que quieren 
    sentarse a comer, y la _cantidad de integrantes_ que conforma a cada uno. Para simplificar su trabajo, se los anota en 
    un vector **P** donde P[i] contiene la cantidad de personas que integran el _grupo i_, siendo en total **n** grupos. Como se 
    trata de un restaurante familiar, las personas sólo se sientan en la mesa si _todos los integrantes de su grupo_ pueden 
    sentarse. Implementar un algoritmo que, mediante programación dinámica, obtenga el conjunto de grupos que ocupan 
    la mayor cantidad de espacios en la mesa (o en otras palabras, que dejan la menor cantidad de espacios vacíos). Indicar 
    y justificar la complejidad del algoritmo.

1.  (★★★) Dado un número n, indicar la forma más económica (aquella que utiliza menos términos) de escribirlo como una 
    suma de cuadrados, utilizando programación dinámica. Indicar y justificar el orden del algoritmo implementado.
    Aclaración: siempre es posible escribir a **n** como suma de _n términos_ de la forma $1^2$, por lo que siempre existe
    solución. Sin embargo, la expresión 10 = $3^2$ + $1^2$ es una manera más económica de escribirlo 
    para n = 10, pues sólo tiene dos términos. Siempre se debe minimizar la cantidad de términos utilizados.

1.  (★★★) Carlitos (primo de Juan, el vago) trabaja para una empresa de publicidad. Tiene un determinado presupuesto P que no 
    puede sobrepasar, y tiene que una serie de campañas publicitarias para elegir. La campaña i cuesta $Ci. También se 
    han realizado diversos estudios que permiten estimar cuánta ganancia nos dará cada campaña, que denominaremos Gi. 
    Implementar un algoritmo que reciba esta información y devuelva cuáles campañas debe realizar Carlitos. Indicar y 
    justificar la complejidad del algoritmo propuesto. ¿Da lo mismo si los valores están expresados en pesos argentinos, 
    dólares u otra moneda? Por ejemplo, si la campaña cuesta 100 dólares, para pasar a pesos se debe hacer la conversión de divisa.

1.  (★★★) Dada una soga de n metros (n ≥ 2) implementar un algoritmo que, utilizando programación dinámica, permita cortarla 
    (en partes de largo entero) de manera tal que el producto del largo de cada una de las partes resultantes sea máximo. El 
    algoritmo debe devolver el valor del producto máximo alcanzable. Indicar y justificar la complejidad del algoritmo. 
    Ejemplos: 
    n = 2 --> Debe devolver 1 (producto máximo es 1 * 1) 
    n = 3 --> Debe devolver 2 (producto máximo es 2 * 1) 
    n = 5 --> Debe devolver 6 (producto máximo es 2 * 3) 
    n = 10 -> Debe devolver 36 (producto máximo es 3 * 3 * 4)

1.  (★★★) Somos ayudantes del gran ladrón _el Lunático_, que está pensando en su próximo atraco. Decidió en este caso robar 
    toda una calle en un barrio privado, que tiene la particularidad de ser circular. Gracias a los trabajos de inteligencia 
    realizados, sabemos cuánto se puede obtener por robar en cada casa. Podemos enumerar a la primer casa como la casa 
    0, de la cual podríamos obtener g0, la casa a su derecha es la 1, que nos daría g1, y así hasta llegar a la casa n − 1, que 
    nos daría gn−1. Toda casa i se considera adyacente a las casas i-1 e i+1. Además, 
    como la calle es circular, la casas 0 y n − 1 **son vecinas**. El problema con el que cuenta _el Lunático_ 
    es que sabe de experiencias anteriores que, si roba en una casa, los vecinos directos se enterarían muy rápido. No le 
    daría tiempo a luego intentar robarles a ellos. Es decir, para robar una casa debe prescindir de robarle a sus vecinos 
    directos. El Lunático nos encarga saber cuáles casas debería atracar y cuál sería la ganancia máxima obtenible. Dado 
    que nosotros nos llevamos un porcentaje de dicha ganancia, vamos a buscar el óptimo a este problema. Implementar un 
    algoritmo que, por **programación dinámica**, obtenga la ganancia óptima, así como cuáles casas habría que robar, a 
    partir de recibir un arreglo de las ganancias obtenibles. Para esto, escribir y describir la ecuación de recurrencia 
    correspondiente. Indicar y justificar la complejidad del algoritmo propuesto.

{::options toc_levels="2" /}
