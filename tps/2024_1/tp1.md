---
math: true
---

{% assign tp = site.data.trabajos.TP1 %}
{% capture fecha %}{{tp.entrega | date: "%e/%m"}}{% endcapture %}

# Trabajo Práctico 1: Algoritmos Greedy en la Nación del Fuego

El presente trabajo busca evaluar el desarrollo y análisis de un algoritmo Greedy. 
La fecha de entrega del mismo es el {{fecha}}.

## Introducción

Es el año 10 AG, y somos asesores del Señor del Fuego (líder supremo de la Nación del Fuego).
El Señor del Fuego cuenta con un ejército de Maestros Fuego, muy temidos en el mundo. Tiene 
varias batallas con las cuales lidiar: una contra el Templo Aire del Este, otra en la Tribu 
del Agua del Norte, otra en la Isla de Kyoshi, una muy importante en Ba Sing Se (capital del 
Reino de la Tierra), y muchas otras más. Sabemos cuánto tiempo necesita el ejército para ganar 
cada una de las batallas ($$t_i$$). El ejército ataca todo junto, no puede ni conviene que se
separen en grupos. Es decir, no participan de más de una batalla en simultáneo.

La felicidad que produce saber que se logró una victoria depende del momento en el que ésta
se obtenga (es decir, que la batalla termine). Es por esto que podemos definir a $$F_i$$ 
como el momento en el que se termina la batalla $$i$$. Si la primera batalla es la $$j$$, 
entonces $$F_j = t_j$$, en cambio si la batalla $$j$$ se realiza justo después de la batalla 
$$i$$, entonces $$F_j = F_i + t_j$$. 

Además del tiempo que consume cada batalla, sabemos que al Señor del Fuego no le da lo mismo
el orden en el que se realizan, porque comunicar la victoria a su nación en diferentes batallas
genera menos impacto si pasa mucho tiempo. Además, cada batalla tiene una importancia diferente. 
Vamos a definir que tenemos un peso $$b_i$$ que nos define cuán importante es una batalla. 

Dadas estas características, se quiere buscar tener el orden de las batallas tales que 
se logre **minimizar** la suma ponderada de los tiempos de finalización: $$ \sum_{i=1}^n b_i F_i $$.

El Señor del Fuego nos pide diseñar un algoritmo que determine aquel orden de las batallas que 
logre minimizar dicha suma ponderada. 


## Consigna

1. Hacer un análisis del problema, y proponer un algoritmo greedy que obtenga **la solución óptima** al 
problema planteado:
Dados los $$n$$ valores de todos los $$t_i$$ y $$b_i$$, determinar cuál es el orden óptimo para realizar 
las batallas en el cuál se minimiza $$ \sum_{i=1}^n b_i F_i $$.
2. Demostrar que el algoritmo planteado obtiene siempre la solución óptima. 
3. Escribir el algoritmo planteado. Describir y justificar la complejidad de dicho algoritmo. Analizar si 
(y cómo) afecta la variabilidad de los valores de $$t_i$$ y $$b_i$$ a los tiempos del algoritmo planteado. 
4. Analizar si (y cómo) afecta la variabilidad de los valores de $$t_i$$ y $$b_i$$ a la optimalidad del 
algoritmo planteado. 
5. Realizar ejemplos de ejecución para encontrar soluciones y corroborar lo encontrado. Adicionalmente, el 
curso proveerá con algunos casos particulares que deben cumplirse su optimalidad también. 
6. Hacer mediciones de tiempos para corroborar la complejidad teórica indicada. 
Agregar los casos de prueba necesarios para dicha corroboración. Realizar gráficos correspondientes. 
7. Agregar cualquier conclusión que les parezca relevante.  

## Entrega

Completar el [formulario de entrega]({{site.data.cuatrimestre.entrega_tps}}) con los integrantes y el link al repositorio donde se encuentre el código fuente, y donde debe encontrarse el informe en formato PDF.
Debe ser claro cómo ejecutar el programa pasando por parámetro un set de datos como
los que se dan de ejemplo. Esto puede ser aclarado dentro del `README.md` del repositorio,
u otra ubicación que les parezca clara. 

El informe debe ser:
* Autocontenido: es decir, no debe ser necesario ponernos a buscar
el código por diferentes lugares.
* Tener todo el análisis correspondiente. 
* Ser realizado en un formato profesional. Para esto, les brindamos [un template]({{site.data.sitios.template_latex}}) en $$\LaTeX$$
para que puedan utilizar (también se encuentra en la home de la página del curso). 
No es necesario que lo sigan al pie de la letra, es simplemente un
ejemplo que tiene varias cosas que pueden llegar a utilizar de $$\LaTeX$$. Si ya conocen $$\LaTeX$$
no es necesario que lo utilicen, o mismo si utilizan algún otro formato (e.g. Markdown con
Pandoc), pero recomendamos su revisión para que vean cosas que no deben de faltar. Por supuesto,
pueden trabajar localmente como usar Overleaf o cualquier otra herramienta. El objetivo
de darles el template no es la de limitar la creatividad, sino de asegurarnos que se cumplan
lineamientos básicos sobre lo que se espera de una entrega de un informe en la facultad.
* En caso de ser necesarias reentregas, por favor agregar las modificaciónes en un Anexo al final del informe. No modificar lo hecho anteriormente.
La excepción a esto sería si hay que rehacer una enorme mayoría de lo escrito. 

La nota del trabajo práctico tendrá en cuenta tanto la presentación y calidad de lo presentado, 
como también el desarrollo del trabajo. No será lo mismo un trabajo realizado con lo mínimo
indispensable, que uno bien presentado, analizado, y probado con diferentes volúmenes, set de 
datos, o estrategias de generación de sets, en el caso que corresponda. 


