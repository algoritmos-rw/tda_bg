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

1.  (★) El problema del Independent Set se define como: dado un grafo no dirigido, obtener el máximo subconjunto de vértices 
    del grafo tal que ningun par de vértices del subconjunto sea adyacente entre si. Dicho conjunto es un Independet Set. 
    Definir el _problema de decisión_ del Independent Set. Luego, implementar un verificador polinomial para este problema. 
    ¿Cuál es la complejidad del verificador implementado? Justificar

1.  (★) El problema del Vertex Cover se define como: dado un grafo no dirigido, obtener el mínimo subconjunto de vértices 
    del grafo tal que toda arista del grafo tenga al menos uno de sus vértices perteneciendo al subconjunto. Dicho conjunto 
    es un Vertex Cover. Definir el _problema de decisión_ del Vertex Cover. Luego, implementar un verificador polinomial para 
    este problema. ¿Cuál es la complejidad del verificador implementado? Justificar

1.  (★★) Dados los problemas de decisiones de Independent Set y Vertex Cover, realizar dos reducciones. 
    a. Reducir Independent Set a Vertex Cover. 
    b. Reducir Vertex Cover a Independent Set.

1.  (★★★) El problema de decisión de 3-SAT dice: dadas un número de cláusulas de variables booleanas, cada cláusula consta de la 
    operación OR entre 3 términos, decidir si existe una configuración de las variables booleanas tal que sea posible cumplir 
    todas las cláusulas. El problema de 3-SAT es NP-Completo. Dados los problemas de decisión de Independent Set y 3-SAT, 
    demostrar que Independent Set es NP-Completo. Luego explicar de qué manera, con el trabajo hecho en la guía hasta este 
    ejercicio, se puede afirmar que Vertex Cover es NP-Completo.

1.  (★) Para cada uno de los siguientes problemas, implementar un verificador polinomial y justificar su complejidad.

    a. Dado un número por parámetro, si es la solución al problema de Búsqueda del máximo en un arreglo
    b. Dado un arreglo, si es la solución a tener el arreglo ordenado
    c. Dadas un arreglo de posiciones de Reinas, si es la solución de colocar al menos N-reinas en un tablero NxN

1.  (★★) Definir el problema de decisión de las N-Reinas. Usar que N-Reinas es un problema NP-Completo para demostrar que
    Demostrar que Independent Set es un problema NP-Completo.

1.  (★★) Definir los problemas de decisión de Independent Set y K-Clique. Hacer una reducción de Independet Set a K-Clique. 
    Dada esta reducción, ¿podemos afirmar que K-Clique es un problema NP-Completo?

1.  (★★) Definir los problemas de decisión de Camino Hamiltoniano y Ciclo Hamiltoniano. Sabiendo que Ciclo Hamiltoniano es 
    NP-Completo, demostrar que Camino Hamiltoniano es NP-Completo.

1.  (★★) Definir los problemas de decisión de Grafo Bipartito y 3-Coloreo. Sabiendo que 3-Coloreo es NP-Completo, reducir 
    Grafo Bipartito a 3-Coloreo. ¿Podemos afirmar que Grafo Bipartito es un problema NP-Completo?

1.  (★★) Definir los problemas de decisión de Subset Sum y Problema de la Mochila. Sabiendo que Subset Sum es 
    NP-Completo, demostrar que el Problema de la Mochila es NP-Completo.

1.  (★) ¿Pertenece el siguiente problema a PSPACE? Dada una lista de enteros positivos $$L$$ y un entero $$n$$ obtener todos 
    los subconjuntos de $$L$$ que suman exactamente $$n$$.

1.  (★) ¿Pertenece el siguiente problema a PSPACE? Dada una lista de enteros positivos $$L$$ y un entero $$n$$ obtener **un** subconjunto 
    de $$L$$ que sume exactamente $$n$$, o, en caso de no existir, que devuelva el subconjunto de suma máxima sin superar el valor de $$n$$.

1.  (★★) Realizar una reducción polinomial del siguiente problema a otro de los vistos durante la cursada. Ayuda: pensar en 
    alguno de los vistos de programación dinámica. Dada esta reducción, ¿se puede afirmar que este problema es NP-Completo?
    
    Dado un número n, encontrar la cantidad más económica (con menos términos) de escribirlo como una suma de cuadrados.

1.  (★★) En su tiempo libre, Carlitos colecciona figuritas del mundial. Incluso a más de un año de la coronación de gloria, hay 
    mucho entusiasmo por estas. Llegó a coleccionar tantas que ahora se dedica a revenderlas (para sacar unos pesos extra 
    de su trabajo principal como publicista). Tiene tantas figuritas que ya no revende al público directamente, sino a otros 
    revendedores y cadenas de kioscos. En general, cuando le piden, le pide un lote de figuritas “por una cantidad determinada 
    de dinero”. Cada tipo de figurita tiene un valor diferente (es decir, la de Messi no vale lo mismo que la del Bobo Weghorst). 
    Podemos decir que absolutamente todos los tipos de figuritas tienen valores diferentes, todos valores enteros, y que Carlitos 
    cuenta con una cantidad _ridículamente alta_ de cada una de ellas. Por un análisis que hizo, sabe que si le piden figuritas por 
    un determinado monto, le conviene dar la menor cantidad de figuritas posibles (siempre cumpliendo con el monto exacto pedido), 
    incluso repitiendo figuritas en caso de ser necesario. El problema de las figuritas de Carlitos dice: dados los valores de los 
    diferentes tipos de figuritas y un monto al que llegar, determinar cuáles figuritas debe dar Carlitos para cumplir exactamente 
    con dicho monto dando la mínima cantidad de figuritas para ello. Asumir todos valores enteros, y que hay figurita de valor 1.
    Por otro lado, recordemos que el _Problema de la Mochila_ es NP-Completo.
    **Redefinir** ambos problemas en sus versiones de problema de decisión, y **realizar** una _reducción polinomial_ de uno a otro. 
    ¿Podemos con esta reducción afirmar que el problema de Carlitos es NP-Completo?

1.  (★★) Se tiene una matriz donde en cada celda hay submarinos, o no, y se quiere poner faros para iluminarlos a todos. 
    El problema es dar la cantidad mínima de faros que se necesitan para que todos los submarinos queden 
    iluminados, siendo que cada faro ilumina su celda y además todas las adyacentes (incluyendo las diagonales), y las 
    directamente adyacentes a estas (es decir, un “radio de 2 celdas”). 
    ¿Se encuentra este problema en NP? ¿Qué problema NP-Completo visto en la cursada es parecido al 
    problema definido? Definir en ambos casos el problema de decisión. ¿qué reducción podríamos hacer? 
    ¿Podemos concluir que este problema es un problema NP-Completo?

1.  (★★) El Hitting-Set Problem se define de la siguiente forma: Dado un conjunto de elemento $$A$$ de $$n$$ elementos, $$m$$ subconjuntos
     $B_1, B_2, ..., B_m$$ de $$A$$ ($$B_i \subseteq A \forall i$$), y un número $$k$$, ¿existe un subconjunto $$C \subseteq A$$ con $$|C|
    \leq k$$ tal que $$C$$ tenga al menos un elemento de cada $$B_i$$ (es decir, $$C \cap B_i \neq \emptyset$$)?

    Demostrar que el Hitting-Set Problem es un problema NP-Completo.


1.  (★★) En el reino de Gondor ha incrementado enormemente la delincuencia luego de su urbanización. El rey Aragorn no 
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

1.  (★★) Definir la relación entre la dificultad entre el problema de obtener el flujo máximo, con el problema de 
    obtener el corte mínimo en una red de transporte. ¿Se puede concluir si alguno de estos problemas es NP-Completo, 
    o que no lo sea? ¿Estos problemas pertenecen a PSPACE? Justificar adecuadamente cada respuesta.

1.  (★★★) Un set dominante (Dominating Set) de un grafo G es un subconjunto **D** de vértices de G, tal que para todo vértice de G: 
    o bien (i) _pertenece a D_; o bien (ii) es _adyacente a un vértice en D_. El problema de decisión del set dominante implica, dado un grafo G y 
    un número $$k$$, determinar si existe un set dominante **D** de a lo sumo tamaño $$k$$.
    Demostrar que el Dominating Set Problem es un problema NP-Completo. 
    Ayuda: recomendamos recordar Vertex Cover, que puede ser útil para esto.

1.  (★★★★) El problema de elección de caminos (Path Selection) pregunta: dado un grafo dirigido G y un set de pedidos $$P_1, P_2, \cdots, P_c$$ 
    de caminos dentro de dicho grafo y un número $$k$$, ¿es posible seleccionar al menos $$k$$ de esos caminos tales que ningún 
    par de caminos seleccionados comparta ningún nodo? Demostrar que Path Selection es un problema NP-Completo. 
    Ayuda: este problema tiene mucha semejanza con Independent Set.

1.  (★★★) El problema de selección de caminos (Path Selection) pregunta: dado un grafo dirigido G y un set de pedidos P1, P2, ..., Pc 
    de caminos dentro de dicho grafo y un número k, ¿es posible seleccionar al menos k de esos caminos tales que ningún 
    par de caminos seleccionados comparta ningún nodo? **Dato**: Path Selection es un problema NP-Completo. 
    Ahora bien, queremos demostrar nuevamente (_pero de otra forma a la vista en clase_) que Independent Set es un problema NP-Completo. 
    Demostrar que Independent Set es un problema NP-Completo, utilizando Path Selection para esto.

{::options toc_levels="2" /}
