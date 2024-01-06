---
math: true
---

# Fuerza Bruta y Backtracking
{:.no_toc}


## Contenidos
{:.no_toc}

1. TOC
{:toc}


## Ejercicio resuelto

### Solución

#### Demostración del orden

## Ejercicios propuestos

1.  (★★) Implementar un algoritmo que dado un Grafo no dirigido nos devuelva un conjunto de vértices que representen un 
    mínimo Vertex Cover del mismo.

1.  (★★★) Un set dominante (Dominating Set) de un grafo G es un subconjunto **D** de vértices de G, tal que para todo vértice de G: 
    o bien (i) _pertenece a D_; o bien (ii) es _adyacente a un vértice en D_.  Implementar un algoritmo que reciba un Grafo, y devuelva 
    un dominating set de dicho grafo con la mínima cantidad de vértices.

1.  (★★★) Un bodegón tiene una única mesa larga con **W** lugares. Hay una persona en la puerta que anota los grupos que quieren 
    sentarse a comer, y la _cantidad de integrantes_ que conforma a cada uno. Para simplificar su trabajo, se los anota en 
    un vector **P** donde P[i] contiene la cantidad de personas que integran el _grupo i_, siendo en total **n** grupos. Como se 
    trata de un restaurante familiar, las personas sólo se sientan en la mesa si _todos los integrantes de su grupo_ pueden 
    sentarse. Implementar un algoritmo que, **por backtracking**, obtenga el conjunto de grupos que ocupan 
    la mayor cantidad de espacios en la mesa (o en otras palabras, que dejan la menor cantidad de espacios vacíos).

1.  (★★★) Para ayudar a personas con problemas visuales (por ejemplo, daltonismo) el gobierno de Agrabah decidió que en una 
    misma parada de colectivo nunca pararán dos colectivos que usen el mismo color. El problema es que ya saben que eso 
    está sucediendo hoy en día, así que van a repintar todas las líneas de colectivos. Por problemas presupuestarios, desean 
    pintar los colectivos con la menor cantidad posible k colores diferentes. Como no quieren 
    parecer un grupo de improvisados que malgasta los fondos públicos, quieren hacer un análisis para saber cuál es ese mínimo
    valor para cumplir con lo pedido (pintar cada línea con alguno de los k colores, de tal forma que no hayan dos de mismo color 
    coincidiendo en la misma parada). Considerando que se tiene la información de todas las paradas de colectivo y qué 
    líneas paran allí, modelar el problema utilizando grafos e implementar un algoritmo que determine si es posible resolver 
    el problema. Indicar la complejidad del algoritmo implementado.

1.  (★★★) Se tiene una matriz donde en cada celda hay submarinos, o no, y se quiere poner faros para iluminarlos a todos. 
    Implementar un algoritmo que dé la cantidad mínima de faros que se necesitan para que todos los submarinos queden 
    iluminados, siendo que cada faro ilumina su celda y además todas las adyacentes (incluyendo las diagonales), y las 
    directamente adyacentes a estas (es decir, un “radio de 2 celdas”).

1.  (★★★) Implementar un algoritmo que, por backtracking, obtenga todos los posibles ordenamientos topológicos de un grafo 
    dirigido y acíclico.

{::options toc_levels="2" /}
