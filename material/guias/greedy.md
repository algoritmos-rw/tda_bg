---
math: true
---

# Greedy
{:.no_toc}


## Contenidos
{:.no_toc}

1. TOC
{:toc}


## Ejercicio resuelto

#### Demostración del orden

## Ejercicios propuestos

1.	Explicar por qué el Algoritmo de Kruskal (para obtener el MST de un grafo no dirigido)
	es un Algoritmo Greedy.

1.	Una empresa cuenta con N máquinas que pueden realizar la misma tarea. Las mismas se alquilan
	por diferentes días (contienen un día de inicio y fin). El trabajo del revisor de planta es,
	dado un conjunto de M pedidos en el mes, determinar si los mismos se podrán realizar sin
	problemas. Escribir un algoritmo que retorne si los trabajos aceptados son válidos o no. 
	¿Qué complejidad tiene? ¿Es óptimo? 

1.	Se tiene como posibles grupos sanguíneos de personas `O`, `A`, `B` y `AB`. Alguien con 
	sangre tipo `O` sólo puede recibir sangre tipo `O`. Alguien de sangre `A` sólo puede 
	recibir sangre de tipo `A` u `O`. Alguien de sangre tipo `B` sólo puede recibir sangre 
	de tipo `B` u `O`. Alguien con sangre tipo `AB` puede recibir sangre de cualquier tipo. 
	Se tienen las cantidades de bolsas de sangre disponibles 
	$\left(S_A, S_B, S_{AB}, S_O\right)$ y la cantidad de personas a tratar 
	$\left(P_A, P_B, P_{AB}, P_O\right)$. Implementar un algoritmo greedy que determine 
	cómo se puede satisfacer la demanda de sangre (o si no puede hacerse). Indicar el orden 
	del algoritmo y justificar por qué el algoritmo propuesto es un algoritmo greedy. 

1.	Las bolsas de un supermercado se cobran por separado y soportan hasta un peso máximo 
	$P$, por encima del cual se rompen. Implementar un algoritmo greedy que, teniendo una 
	lista de pesos de $n$ productos comprados, encuentre la mejor forma de distribuir 
	los productos en la menor cantidad posible de bolsas. Realizar el seguimiento del 
	algoritmo propuesto para bolsas con peso máximo 5 y para una lista con los pesos: 
	`[ 4, 2, 1, 3, 5 ]`. ¿El algoritmo implementado encuentra siempre 
	la solución óptima? Justificar.

1.	Una ruta tiene un conjunto de bifurcaciones para acceder a diferentes pueblos. 
	El listado (ordenado por nombre del pueblo) contiene el número de kilómetro donde está 
	ubicada cada una. Se desea ubicar la menor cantidad de patrullas policiales (en las
	bifurcaciones) de tal forma que no haya bifurcaciones con vigilancia a menos de 50 km.
	Ejemplo: 

	| Ciudad      | Bifurcación |
	|-------------|-------------|
	| Castelli    | 185         |
	| Gral. Guido | 249         |
	| Lezama      | 156         |
	| Maipú       | 270         |
	| Sevigne     | 194         |


	Si pongo un patrullero en la bifurcación de Lezama, cubro Castelli y Sevigne. Pero no Gral.
	Guido y Maipú. Necesitaría en ese caso, poner otro. Agrego otro patrullero en Gral Guido. 
	Con eso tengo 2 móviles policiales en bifurcaciones que cubren todas los accesos a todas 
	las ciudades con distancia menor a 50km.

	Proponer un algoritmo que lo resuelva. Justificar que la solución es óptima


1.	El club de amigos de la república Antillense prepara un ágape en sus instalaciones en 
	la que desea invitar a la máxima cantidad de sus “n” socios. Sin embargo por protocolo 
	cada persona invitada debe cumplir un requisito: Sólo puede asistir si conoce a al menos 
	otras 4 personas invitadas

	a. Nos solicitan seleccionar el mayor número posible de invitados. Proponga una 
	estrategia greedy óptima para resolver el problema.

	b.Los organizadores desean que cada invitado pueda conocer nuevas personas. Por lo que 
	nos solicitan que adicionemos una nueva restricción a la invitación: Sólo puede asistir si 
	NO conoce al menos otras 4 personas invitadas. Modifique su propuesta para satisfacer 
	esta nueva solución.


{::options toc_levels="2" /}
