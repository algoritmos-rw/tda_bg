---
math: true
---

# Programación Lineal
{:.no_toc}


## Contenidos
{:.no_toc}

1. TOC
{:toc}


## Ejercicio resuelto

## Ejercicios propuestos

1.	(★) Implementar un modelo de programación lineal que resuelva el Problema de la Mochila de valor 
	máximo (ejercicio 7 de PD). 

1. 	(★) Implementar un modelo de programación lineal que resuelva el problema de Juan El Vago 
	(ejercicio 4 de PD).

1. 	(★) Implementar un modelo de programación lineal que resuelva el problema de Vertex Cover mínimo 
	(ejercicio 13 de BT). 

1. 	(★) Implementar un modelo de programación lineal que resuelva el problema de Dominating Set mínimo 
	(ejercicio 14 de BT).

1.	(★) Implementar un modelo de programación lineal que resuelva el problema de 3-SAT mínimo: que 
	encuentre una solución que satisfaga, utlizando la menor cantidad de variables en `true` posible.

1. 	(★★★) Implementar un modelo de programación lineal que resuelva el problema de Independent Set Máximo.

1. 	(★★) Implementar un modelo de programación lineal que determine la cantidad mínima de colores a utilizar para poder pintar
	a un grafo de colores, de tal forma que ningún adyacente comparta color entre sí.

1.	(★★) Implementar un modelo de **programación lineal** que permita determinar el clique de 
	tamaño máximo dentro de un grafo. Indicar la cantidad de restricciones generadas en función
	de la cantidad de vértices y aristas (podés usar notación O para esto, no es importante el número exacto).

1.	(★★★) Osvaldo es un empleado de una inescrupulosa empresa inmobiliaria, y está buscando un ascenso. 
	Está viendo cómo se predice que evolucionará el precio de un inmueble (el cual no poseen, 
	pero pueden comprar). Tiene la información de estas predicciones en el arreglo $$p$$, para todo
	día $$i = 1, 2, ..., n$$. Osvaldo quiere determinar un día $$j$$ en el cuál comprar la casa, 
	y un día $$k$$ en el cual venderla ($$k > j$$), suponiendo que eso sucederá sin lugar a dudas. 
	El objetivo, por supuesto, es el de maximizar la ganancia dada por $$p[k] - p[j]$$. 

	Implementar un modelo de **programación lineal** que determine el día de compra y el día de
	venta del inmueble. Indicar la cantidad de restricciones implementadas para esto.

1.	(★★★★) Dado un arreglo de enteros ordenado, un elemento y un valor entero `k`, se quiere encuentrar
	los `k` valores del arreglo más cercanos al elemento en cuestión (que bien podría
	estar en el arreglo, o no). 
	Realizar un modelo de programación lineal que resuelva este problema. OJO nos interesa que sean cercanos
	al elemento, y eso se ve con el valor absoluto de la diferencia, y el **operador módulo** no es
	un operador lineal. Si se incluye el **operador módulo** como parte del Modelo, el ejercicio estará Mal.
   	Resolver de tal manera que el modelo sea el que resuelva estas diferencias.
	Indicar la cantidad de restricciones definidas.

1.	(★★) Se está formando una nueva comisión de actividades culturales de un pueblo. Cada 
	habitante es miembro de 0 o más clubes, y de exactamente 1 partido político. 
	Cada uno de los $n$ clubes debe nombrar a un representante ante la nueva comisión de 
	actividades culturales, con las siguientes restricciones: cada partido político 
	no puede tener más de $\frac{n}{2}$ simpatizantes en la comisión, y además queremos
	minimizar la cantidad simpatizantes a un mismo partido político; cada persona puede 
	representar a solo un club, cada club debe estar representado por un miembro. 

	Implementar un modelo de **programación lineal** que dada la información de los
	habitantes (a qué clubes son miembros, a qué partido pertenecen), nos permita obtener
	los representantes válidos, que además minimicen la cantidad de simpatizantes a un mismo partido
	político. Indicar la cantidad de inecuaciones definidas en el modelo.

{::options toc_levels="2" /}
