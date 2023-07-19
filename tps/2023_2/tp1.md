---
math: true
---

{% assign tp = site.data.trabajos.TP1 %}
{% capture fecha %}{{tp.entrega | date: "%e/%m"}}{% endcapture %}

# Trabajo Práctico 1: Algoritmos Greedy

El presente trabajo busca evaluar el desarrollo y análisis de un algoritmo Greedy. 
La fecha de entrega del mismo es el {{fecha}}.

## Introducción

Tenemos que ayudar a Scaloni a analizar los próximos $n$ rivales de la selección
campeona del mundo. Como técnico perfeccionista, quiere analizar videos de 
cada uno de los rivales. Recibió un compilado por cada rival, y necesita hacer un
análisis muy detallado, lo cual le implica tomar apuntes, analizar tácticas, ver
cuándo hay que hacerle un masaje a Messi, etc... Para que el análisis sea 
detallado, cada compilado no lo revisa únicamente él, sino también un ayudante. 

El análisis del rival $i$ le toma $s_i$ de tiempo a Scaloni, y luego $a_i$ al 
ayudante (independientemente de cuál ayudante lo vea). Lo bueno, es que
después de los grandes logros obtenidos, Scaloni cuenta con $n$ ayudantes (es
decir, la misma cantidad que rivales), que pueden ver los videos completamente 
en paralelo. Siempre los ayudantes podrán ver los videos **después** que Scaloni haya
terminado de verlo y analizarlo como corresponde (esto no lo delega). Cuando
llega la hora que un ayudante lo vea, puede ser cualquiera, pero sólo uno lo verá
(no hay ganancia en que dos lo vean). 

El DT necesita que los rivales estén todos con sus correspondientes análisis lo antes
posible, y por eso te pide que lo ayudes. Dice que confía en vos. Sabe que no lo 
vas a dejar tirado. 


## Consigna

1. Hacer un análisis del problema, y proponer un algoritmo greedy que obtenga la solución óptima al problema planteado: Dado los valores de $n$, los $s_i$ y $a_i$, determinar un orden en el que
Scaloni debe ver los videos tal que todos los análisis estén listos lo antes posible (es decir, en el mínimo tiempo necesario). 
2. Francia. 
3. Escribir el algoritmo planteado. Describir y justificar la complejidad de dicho algoritmo. Analizar si (y cómo) afecta la variabilidad de los valores de $a_i$ y $s_i$ a los tiempos y optimalidad del algoritmo planteado. 
4. Realizar ejemplos de ejecución para encontrar soluciones y corroborar lo encontrado. Adicionalmente, el curso proveerá con algunos casos particulares que deben cumplirse su optimalidad también. 
5. De las pruebas anteriores, hacer también mediciones de tiempos para corroborar la complejidad teórica indicada. Realizar gráficos correspondientes. 
6. Agregar cualquier conclusión que parezca relevante.  

