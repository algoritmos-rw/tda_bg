---
math: true
---

{% assign tp = site.data.trabajos.TP2 %}
{% capture fecha %}{{tp.entrega | date: "%e/%m"}}{% endcapture %}

# Trabajo Práctico 2: Programación Dinámica

El presente trabajo busca evaluar el desarrollo y análisis de un algoritmo 
de Programación Dinámica. 
La fecha de entrega del mismo es el {{fecha}}.

## Introducción

Ante la especulación de que Lionel Messi podría... (*se persigna*) no jugar
el mundial de 2026, Scaloni está analizando alternativas para poder reemplazarlo. 
Como reemplazar a Messi parece totalmente irrealizable, va por una alternativa 
más terrenal: clonar al capitán.

Un laboratorio secreto en Miami ya está trabajando en esto desde Julio, pero
tiene un problema: no pueden generar un ser vivo con el ADN exacto. Es como 
si viniera de otro planeta, o algo por el estilo. 

Para poder tomar diferentes medidas y calibrar la máquina, necesitan definir
cuán distinto es el ADN de Messi respecto del generado. 

Scaloni no sabe bien cómo hacer esto, y sus $n$ ayudantes menos, pero Menotti, 
exponente del juego bonito en Argentina, le recomendó usar Programación Dinámica
para resolver este problema. Nos está pidiendo ayuda para poder resolver este
problema. 

## Consigna

1. 	Hacer un análisis del problema, y proponer un algoritmo por programación dinámica 
	que obtenga la solución óptima al problema planteado: Dada una secuencia original 
	(la de Messi) y una generada (la del potencial clon), y los costos de .......
	y determine cuál es la diferencia entre ambos ADNs (es decir, cuánto costaría
	volver el ADN del clon en el ADN de Messi exactamente).
2. 	¿Hace falta que te lo diga?
3. 	Escribir el algoritmo planteado. Describir y justificar la complejidad de dicho algoritmo. Analizar si (y cómo) afecta la variabilidad de los valores de los costos a los tiempos y optimalidad del algoritmo planteado. 
4. Realizar ejemplos de ejecución para encontrar soluciones y corroborar lo encontrado. Adicionalmente, el curso proveerá con algunos casos particulares que deben cumplirse su optimalidad también. 
5. De las pruebas anteriores, hacer también mediciones de tiempos para corroborar la complejidad teórica indicada. Realizar gráficos correspondientes. 
6. Agregar cualquier conclusión que parezca relevante.  

