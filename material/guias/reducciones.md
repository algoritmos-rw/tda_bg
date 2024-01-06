---
math: true
---

# Reducciones y Clases de Complejidad
{:.no_toc}


## Contenidos
{:.no_toc}

1. TOC
{:toc}


## Ejercicio resuelto

### Solución

#### Demostración del orden

## Ejercicios propuestos

1.  (★★★) Se tiene una matriz donde en cada celda hay submarinos, o no, y se quiere poner faros para iluminarlos a todos. 
    El problema es dar la cantidad mínima de faros que se necesitan para que todos los submarinos queden 
    iluminados, siendo que cada faro ilumina su celda y además todas las adyacentes (incluyendo las diagonales), y las 
    directamente adyacentes a estas (es decir, un “radio de 2 celdas”). 
    ¿Se encuentra este problema en NP? ¿Qué problema NP-Completo visto en la cursada es semejante al 
    problema definido? Definir en ambos casos el problema de decisión. ¿qué reducción podríamos hacer? 
    ¿Podemos concluir que este problema es un problema NP-Completo?

1.  (★★★) En el reino de Gondor ha incrementado enormemente la delincuencia luego de su urbanización. El rey Aragorn no 
    quiere que todo su esfuerzo en construir calles resulte en vano, por lo que quiere poner guardianes a vigilar las calles por 
    las noches. El problema es que cuesta mucho dinero entrenar a dichos guardianes, por lo que quiere reducir al mínimo 
    la cantidad que sean necesarios entrenar. Sabe que cada guardian puede estar vigilando desde una esquina, y desde allí 
    tener visibilidad hasta cualquier otra esquina directa. Necesita determinar la cantidad mínima de guardianes que son 
    necesarios para cubrir todas las calles de su reino. Como primera medida, consulta con el oráculo Alumnus Teorius 
    Algoritmus (es decir, quien lee esta consigna), para determinar si esto es conseguible en corto tiempo (el oráculo le 
    pregunó algo sobre tiempo polinomial, que Aragorn no entendió y le dijo “si, eso”). 
    Tenemos que explicarle a Aragorn que este pedido no es realizable (y debe armarse de paciencia, o no buscar el mínimo 
    exacto), porque el problema de Guardianes de Gondor es, en realidad, un problema NP-Completo (en su versión de 
    problema de decisión: _“¿Se pueden vigilar todas las calles con esta topología con un máximo de K guardianes?”_).

1.  (★★★) Definir la relación entre la dificultad entre el problema de obtener el flujo máximo, con el problema de 
    obtener el corte mínimo en una red de transporte. ¿Se puede concluir si alguno de estos problemas es NP-Completo, 
    o que no lo sea? ¿Estos problemas pertenecen a PSPACE? Justificar adecuadamente cada respuesta.

1.  (★★★) Realizar una reducción polinomial del siguiente problema a otro de los vistos durante la cursada. Ayuda: pensar en 
    alguno de los vistos de programación dinámica. Dada esta reducción, ¿se puede afirmar que este problema es NP-Completo?
    
    Dado un número n, mostrar la cantidad más económica (con menos términos) de escribirlo como una suma de cuadrados, 
    utilizando programación dinámica.

1.  (★★★) El problema de elección de caminos (Path Selection) pregunta: dado un grafo dirigido G y un set de pedidos P1, P2, ..., Pc 
    de caminos dentro de dicho grafo y un número k, ¿es posible seleccionar al menos k de esos caminos tales que ningún 
    par de ellos compartan ningún nodo? Demostrar que Path Selection es un problema NP-Completo. 
    Ayuda: este problema tiene mucha semejanza con Independent Set. Recomandamos reducir dicho problema a Path Selection.

1.  (★★★) Un set dominante (Dominating Set) de un grafo G es un subconjunto D de vértices de G, tal que todo vértice de G 
    pertenece a D o es adyacente a un vértice en D. El problema de decisión del set dominante implica, dado un grafo G y 
    un número k, determinar si existe un set dominante de a lo sumo tamaño k. 
    Demostrar que el Dominating Set Problem es un problema NP-Completo. 
    Ayuda: recomendamos recordar Vertex Cover, que puede ser útil para esto.

1.  (★★★) El problema de selección de caminos (Path Selection) pregunta: dado un grafo dirigido G y un set de pedidos P1, P2, ..., Pc 
    de caminos dentro de dicho grafo y un número k, ¿es posible seleccionar al menos k de esos caminos tales que ningún 
    par de ellos compartan ningún nodo? Path Selection es un problema NP-Completo. 
    Ahora bien, queremos demostrar nuevamente (pero de otra forma a la vista en clase) que Independent Set es un problema NP-Completo. 
    Demostrar que Independent Set es un problema NP-Completo, utilizando Path Selection para esto.

1.  (★★★) En su tiempo libre, Carlitos colecciona figuritas del mundial. Incluso a casi un año de la coronación de gloria, hay 
    mucho entusiasmo por estas. Llegó a coleccionar tantas que ahora se dedica a revenderlas (para sacar unos pesos extra 
    de su trabajo principal como publicista). Tiene tantas figuritas que ya no revende al público directamente, sino a otros 
    revendedores y cadenas de kioscos. En general, cuando le piden, le piden figuritas “por una cantidad de dinero”. Cada 
    tipo de figurita tiene un valor diferente (es decir, la de Messi no vale lo mismo que la del Bobo Weghorst). Podemos 
    decir que absolutamente todos los tipos de figuritas tienen valores diferentes, todos valores enteros, y que Carlitos cuenta 
    con una cantidad ridículamente alta de cada una de ellas. Por un análisis que hizo, sabe que si le piden figuritas por un 
    determinado monto, le conviene dar la menor cantidad de figuritas posibles (siempre cumpliendo con el monto exacto 
    pedido), incluso repitiendo figuritas en caso de ser necesario. El problema de las figuritas de Carlitos dice: dados los 
    valores de los diferentes tipos de figuritas y un monto al que llegar, determinar cuáles figuritas debe dar Carlitos para 
    cumplir exactamente con dicho monto dando la mínima cantidad de figuritas para ello.
    Recordemos que el _Problema de la Mochila_, es NP-Completo.
    **Redefinir** ambos problemas en sus versiones de problema de decisión, y **realizar** una _reducción polinomial_ de uno a otro. 
    ¿Podemos con esta reducción afirmar que el problema de Carlitos es NP-Completo?

{::options toc_levels="2" /}
