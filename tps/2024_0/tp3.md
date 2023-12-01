---
math: true
---

{% assign tp = site.data.trabajos.TP3 %}
{% capture fecha %}{{tp.entrega | date: "%e/%m"}}{% endcapture %}

# Trabajo Práctico 3: Problemas NP-Completos

El presente trabajo busca evaluar el desarrollo y análisis de un algoritmo 
de Backtracking para resolver un Problema NP-Completo, así como el análisis 
de posibles aproximaciones. 
La fecha de entrega del mismo es el {{fecha}}.

## Introducción

Scaloni ya está armando la lista de 43 jugadores que van a ir al mundial 2026. 
Hay mucha presión por parte de la prensa para bajar línea de cuál debería ser 
el 11 inicial. Lo de siempre. 
Algunos medios quieren que juegue Roncaglia, otros quieren que juegue 
Mateo Messi, y así. Cada medio tiene un subconjunto de
jugadores que quiere que jueguen. A Scaloni esto no le importa, no va a dejar
que la prensa lo condicione, pero tiene jugadores jóvenes a los que esto
puede afectarles. 

Justo hay un partido amistoso contra Burkina Faso la semana que viene. Oportunidad
ideal para poner un equipo que contente a todos, baje la presión y poder 
aislar al equipo. 

El problema es, ¿cómo elegir el conjunto de jugadores que jueguen ese partido 
(entre titulares y suplentes que vayan a entrar)? Además, Scaloni quiere poder
usar ese partido para probar cosas aparte. No puede gastar el amistoso
para contentar a un periodista mufa que habla mal de Messi, por ejemplo. 
Quiere definir el conjunto más pequeño de jugadores necesarios para contentarlos 
y poder seguir con la suya. Con elegir
un jugador que contente a cada periodista/medio, le es suficiente. 

Ante este problema, Bilardo se sentó con Scaloni para explicarle que en realidad 
este es un problema conocido (viejo zorro como es, ya se comió todas las operetas 
de prensa así que se conoce este problema de memoria). Se sirvió una copa de _Gatorei_ 
y le comentó:

"Esto no es más que un caso particular del Hitting-Set Problem. El cual es: Dado un conjunto 
$$A$$ de $$n$$ elementos y $$m$$ subconjuntos $$B_1, B_2, ..., B_m$$ de $$A$$
($$B_i \subseteq A \forall i$$) , queremos el subconjunto $$C \subseteq A$$ de menor tamaño tal 
que $$C$$ tenga al menos un elemento de cada
$$B_i$$ (es decir, $$C \cap B_i \neq \emptyset$$). En nuestro caso, $$A$$ son los jugadores 
convocados, los $$B_i$$ son los deseos de la
prensa, y $$C$$ es el conjunto de jugadores que deberían jugar contra Burkina Faso 
si o si". 

Bueno, ahora con un poco más claridad en el tema, Scaloni necesita de nuestra 
ayuda para ver si obtener este subconjunto se puede hacer de forma eficiente 
(polinomial) o, si no queda otra, con qué alternativas contamos. 


## Consigna

Para los primeros dos puntos, considerar la versión de decisión del Hitting-Set Problem:

Dado un conjunto de elemento $$A$$ de $$n$$ elementos, $$m$$ subconjuntos $$B_1, B_2, ..., B_m$$ de $$A$$
($$B_i \subseteq A \forall i$$), y un número $$k$$, ¿existe un subconjunto $$C \subseteq A$$ con $$|C| \leq k$$ tal que $$C$$ tenga al menos un elemento de cada $$B_i$$ (es decir, 
$$C \cap B_i \neq \emptyset$$)?


1. 	Demostrar que el Hitting-Set Problem se encuentra en NP.

2. 	Demostrar que el Hitting-Set Problem es, en efecto, un problema NP-Completo. 

3. 	Escribir un algoritmo que, por backtracking, obtenga la solución óptima al problema. 
	Generar sets de datos para corroborar su correctitud, así como tomar mediciones de tiempos. 

4.	Implementar alguna otra aproximación (u algoritmo greedy) que 
	les parezca de interés. Realizar mediciones y comparaciones con la solución óptima
	con sets de datos propios. 
	(incluso para valores que el algoritmo del punto anterior fuera inmanejable). 
	Indicar y justificar su complejidad. Obtener una cota empírica de aproximación.

5. 	Agregar cualquier conclusión que parezca relevante.

## Entrega

Debe enviarse al corrector asignado, por mail o slack, el link
al repositorio donde se encuentre el código fuente, y donde debe encontrarse
el informe en formato PDF, que debe seguir los lineamientos establecidos en el TP1 y TP2.
Debe ser claro cómo ejecutar el programa pasando por parámetro un set de datos como
los que se dan de ejemplo. Esto puede ser dentro del `README.md` del repositorio,
u otra forma que les parezca clara. 

La nota del trabajo práctico tendrá en cuenta tanto la presentación y calidad de lo presentado, 
como también el desarrollo del trabajo. No será lo mismo un trabajo realizado con lo mínimo
indispensable, que uno bien presentado, analizado, y probado con diferentes volúmenes, set de 
datos, o estrategias de generación de sets, en el caso que corresponda.

