---
math: true
---

{% assign tp = site.data.trabajos.TP3 %}
{% capture fecha %}{{tp.entrega | date: "%e/%m"}}{% endcapture %}

# Trabajo Práctico 3: Diversión NP-Completa

El presente trabajo busca evaluar el desarrollo y análisis de un algoritmo 
de Backtracking para resolver un Problema NP-Completo, así como el análisis 
de posibles aproximaciones. 
La fecha de entrega del mismo es el {{fecha}}.

## Introducción

Los hermanos siguieron creciendo. Mateo también aprendió sobre programación dinámica, y cada uno aplicaba la lógica sabiendo que el otro también lo hacía. El juego de las monedas se tornó aburrido en cuánto notaron que siempre ganaba quien empezara, o según la suerte. Los años pasaron, llegó la adolescencia y empezaron a tener gustos diferentes. En general, jugaban a juegos individuales. 
En particular, Sophia estaba muy enganchada con un juego inventado en Argentina por Jaime Poniachik (uno de los fundadores de _Ediciones de Mente_) en 1982: La Batalla Naval Individual. 

En dicho juego, tenemos un tablero de $$n \times m$$ casilleros, y $$k$$ barcos. Cada barco $$i$$ tiene $$b_i$$ de largo. Es decir, requiere de $$b_i$$ casilleros para ser ubicado. Todos los barcos tienen 1 casillero de ancho. El tablero a su vez tiene un requisito de consumo tanto en sus filas como en sus columnas. Si en una fila indica un 3, significa que deben haber 3 casilleros de dicha fila siendo ocupados. Ni más, ni menos. No podemos poner dos barcos de forma adyacente (es decir, no pueden estar contiguos ni por fila, ni por columna, ni en diagonal directamente). Debemos ubicar todos los barcos de tal manera que se cumplan todos los requisitos. A continuación mostramos un ejemplo de un juego resuelto: 

![battleships](../../assets/img/tps/battleships.png){:width="200"}

## Consigna

Para los primeros dos puntos considerar la versión de decisión del problema de La Batalla Naval: Dado un tablero de $$n \times m$$ casilleros, y una lista de $$k$$ barcos (donde el barco $$i$$ tiene $$b_i$$ de largo), una lista de restricciones para las filas (donde la restricción $$j$$ corresponde a la cantidad de casilleros a ser ocupados en la fila $$j$$) y una lista de restricciones para las columnas (símil filas, pero para columnas), ¿es posible definir una ubicación de dichos barcos de tal forma que se cumplan con las demandas de cada fila y columna, y las restricciones de ubicación?

1. 	Demostrar que el Problema de la Batalla Naval se encuentra en NP.

2. 	Demostrar que el Problema de la Batalla Naval es, en efecto, un problema NP-Completo. 
	Si se hace una reducción involucrando un problema no visto en clase, agregar una
	(al menos resumida) demostración que dicho problema es NP-Completo. 
	Para esto, recomendamos ver ya sea los problemas _3-Partition_ o _Bin-Packing_, ambos
	en su versión unaria. Si bien sería tentador utilizar _2-Partition_, esta reducción
	no sería correcta. En caso de querer saber más al respecto, consultarnos :-)

3. 	Escribir un algoritmo que, por backtracking, obtenga la solución óptima al problema (valga la 
	redundancia) en la versión de optimización: Dado un tablero de $$n \times m$$ casilleros, y una lista de 
	$$k$$ barcos (donde el barco $$i$$ tiene $$b_i$$ de largo) una lista de las demandas de las $$n$$ filas y
	una lista de las $$m$$ demandas de las columnas, dar la asignación de posiciones de los barcos
	de tal forma que se reduzca al mínimo la cantidad de demanda incumplida. Pueden no utilizarse todos los barcos. 
	Si simplemente no se cumple que una columna que debería tene 3 casilleros ocupados tiene 1, entonces 
	contará como 2 de demanda incumplida. 
	Por el contrario, no está permitido exceder la cantidad demandada.
	Generar sets de datos para corroborar su correctitud, así como tomar mediciones de tiempos. 

4. 	Escribir un modelo de programación lineal que resuelva el problema de forma óptima. Ejecutarlo
	para los mismos sets de datos para corroborar su correctitud. Tomar mediciones de tiempos
	y compararlas con las del algoritmo que implementa Backtracking. 

5. 	John Jellicoe (almirante de la Royal Navy durante la batalla de Jutlandia) nos propone el siguiente 
	algoritmo de aproximación: Ir a fila/columna de mayor demanda, y ubicar el barco de mayor longitud en dicha
	fila/columna en algún lugar válido. Si el barco de mayor longitud es más largo que dicha demanda, simplemente
	saltearlo y seguir con el siguiente. Volver a aplicar hasta que no queden más barcos o no haya más 
	demandas a cumplir.
 	
	Este algoritmo sirve como una aproximación para resolver el problema de La Batalla Naval. 
	Implementar dicho algoritmo, analizar su complejidad
	y analizar cuán buena aproximación es. Para esto, considerar lo siguiente: 
	Sea $$I$$ una instancia cualquiera del problema de La Batalla Naval, y $$z(I)$$ una
	solución óptima para dicha instancia, y sea $$A(I)$$ la solución aproximada, 
	se define $$\frac{A(I)}{z(I)} \leq r(A)$$ para todas las instancias posibles. 
	Calcular $$r(A)$$ para el algoritmo dado, demostrando que la cota está bien
	calculada. Realizar mediciones utilizando el algoritmo exacto y la aproximación,
	con el objetivo de verificar dicha relación. Realizar también mediciones
	que contemplen volúmenes de datos ya inmanejables para el algoritmo exacto,
	a fin de corroborar empíricamente la cota calculada anteriormente. 

7.	**Opcional**: Implementar alguna otra aproximación (o algoritmo greedy) que 
	les parezca de interés. Comparar sus resultados con los dados por la aproximación 
	del punto anterior. Indicar y justificar su complejidad. No es obligatorio
	hacer este punto para aprobar el trabajo práctico (pero si resta puntos no hacerlo).

8. 	Agregar cualquier conclusión que parezca relevante.

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

