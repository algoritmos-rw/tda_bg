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

### Solución

#### Demostración del orden

## Ejercicios propuestos

1.  (★) Explicar por qué el Algoritmo de Kruskal (para obtener el MST de un grafo no dirigido) es un Algoritmo Greedy.

1.  (★) Realizar un seguimiento de aplicar el Algoritmo de Huffman al texto “PRETERINTENCIONALIDAD”, indicando el 
    binario resultante de comprimirlo. ¿Por qué se trata de un algoritmo Greedy? Justificar

1.  (★) Una ruta tiene un conjunto de bifurcaciones para acceder a diferentes pueblos. El listado (ordenado por nombre del 
    pueblo) contiene el número de kilómetro donde está ubicada cada una. Se desea ubicar la menor cantidad de patrullas 
    policiales (en las bifurcaciones) de tal forma que no haya bifurcaciones con vigilancia a menos de 50 km.
    Justificar que la solución es óptima. Indicar y justificar la complejidad del algoritmo implementado.
    Ejemplo: 

    | Ciudad      | Bifurcación |
    |-------------|-------------|
    | Castelli    | 185         |
    | Gral Guido  | 242         |
    | Lezama      | 156         |
    | Maipú       | 270         |
    | Sevigne     | 194         |
    Si pongo un patrullero en la bifurcación de Lezama, cubro Castelli y Sevigne. Pero no Gral Guido y Maipú. 
    Necesitaría en ese caso, poner otro. Agrego otro patrullero en Gral Guido. Con eso tengo 2 móviles policiales 
    en bifurcaciones que cubren todas los accesos a todas las ciudades con distancia menor a 50km.

    En un caso alternativo donde solamente se consideren las bifurcaciones de Castelli, Gral Guido y Sevigne, la  
    única solución óptima sería colocar un móvil policial en Sevigne.

1.  (★) Se tiene como posibles grupos sanguíneos de personas `O`, `A`, `B` y `AB`. Alguien con sangre tipo `O` sólo puede 
    recibir sangre tipo `O`. Alguien de sangre `A` sólo puede recibir sangre de tipo `A` u `O`. Alguien de sangre tipo `B` 
    sólo puede recibir sangre de tipo `B` u `O`. Alguien con sangre tipo `AB` puede recibir sangre de cualquier tipo. Se 
    tienen las cantidades de bolsas de sangre disponibles $\left(S_A, S_B, S_{AB}, S_O\right)$ y la cantidad de sangre solicitada 
    para tratar en cantidades de bolsas $\left(P_A, P_B, P_{AB}, P_O\right)$. Implementar un algoritmo greedy que determine 
    cómo se puede satisfacer la demanda de sangre (o si no puede hacerse). Indicar el orden del algoritmo y justificar por 
    qué el algoritmo propuesto es un algoritmo greedy.

1.  (★★) Las bolsas de un supermercado se cobran por separado y soportan hasta un peso máximo $P$, por encima del cual 
    se rompen. Implementar un algoritmo greedy que, teniendo una lista de pesos de $n$ productos comprados, encuentre 
    la mejor forma de distribuir los productos en la menor cantidad posible de bolsas. Realizar el seguimiento del algoritmo
    propuesto para bolsas con peso máximo 5 y para una lista con los pesos: `[ 4, 2, 1, 3, 5 ]`. ¿El algoritmo implementado 
    encuentra siempre la solución óptima? Justificar. Indicar y justificar la complejidad del algoritmo implementado.

1.  (★★) Trabajamos para el mafioso Arnook, que es quien tiene la máxima influencia y poder en la zona costera de Ciudad 
    República. Allí reina el caos y la delincuencia, a tal punto que quien termina organizando las pequeñas mafias locales 
    no es otro sino Arnook. En particular, nos vamos a centrar en unos pedidos que recibe de parte de dichos grupos por el 
    control de diferentes kilómetros de la ruta costera. Cada pequeña mafia le pide a Arnook control sobre un rango de 
    kilómetros (por ejemplo, la mafia nro 1 le pide del kilómetro 1 al 3.5, la mafia 2 le pide del 3.3333 al 8, etc. . . ). 
    Si hay una mafia tomando control de algún determinado kilómetro, no puede haber otra haciendo lo mismo (es decir, no pueden 
    solaparse). Cada mafia pide por _un rango específico_. Arnook no cobra por kilómetraje sino por “otorgar el permiso”,  
    indistintamente de los kilómetros pedidos. Ahora bien, esto es una mafia, no una ONG, y no debe rendir cuentas con 
    nadie, así lo único que es de interés es maximizar la cantidad de permisos otorgados (asegurándose de no otorgarle algún 
    lugar a dos mafias diferentes). Implementar un algoritmo Greedy que reciba los rangos de kilómetros pedidos por cada 
    mafia, y determine a cuáles se les otorgará control, de forma que no hayan dos mafias ocupando mismo territorio, y a su 
    vez maximizando la cantidad de pedidos otorgados. Indicar y justificar la complejidad del algoritmo implementado. 
    Justificar por qué el algoritmo planteado es Greedy. ¿El algoritmo da la solución óptima siempre?

1.  (★★) Tenemos una ruta recta muy larga, de K kilómetros, sobre la cual hay casas dispersas. En dichas casas vive gente que 
    usa mucho sus celulares. El intendente a cargo la ruta debe renovar por completo el sistema de antenas, teniendo que 
    construir sobre la ruta nuevas antenas. Cada antena tiene un rango de cobertura de R kilómetros (valor constante conocido).
    Implementar un algoritmo Greedy que reciba **las ubicaciones de las casas**, en número de kilómetro sobre esta ruta (números 
    _reales positivos_) **desordenadas**, y devuelva los kilómetros sobre los que debemos construir las antenas para que todas las 
    casas tengan cobertura, y se construya para esto la menor cantidad de antenas posibles. Indicar y justificar la complejidad del 
    algoritmo implementado. Justificar por qué se trata de un algoritmo greedy. ¿El algoritmo da la solución óptima siempre?

1.  (★★) Se tiene una matriz donde en cada celda hay submarinos, o no, y se quiere poner faros para iluminarlos a todos. 
    Implementar un algoritmo **Greedy** que dé la cantidad mínima de faros que se necesitan para que todos los submarinos queden 
    iluminados, siendo que cada faro ilumina su celda y además todas las adyacentes (incluyendo las diagonales), y las 
    directamente adyacentes a estas (es decir, un “radio de 2 celdas”). Indicar y justificar la complejidad del algoritmo 
    implementado. ¿El algoritmo implementado da siempre la solución óptima? Justificar

1.  (★★) Se tiene una colección de n libros con diferentes espesores, que pueden estar entre 1 y n (valores no necesariamente 
    enteros). Tu objetivo es guardar esos libros en la menor cantidad de cajas. Todas las cajas disponibles son de la 
    misma capacidad L (se asegura que L ≥ n). Obviamente, no podés partir un libro para que vaya en múltiples cajas, 
    pero sí podés poner múltiples libros en una misma caja, siempre y cuando los espesore no superen esa capacidad L.
    Implementar un algoritmo Greedy que obtenga la mínima cantidad de cajas a utilizar. Indicar y justificar la complejidad 
    del algoritmo implementado. Justificar por qué se trata de un algoritmo greedy. ¿El algoritmo propuesto encuentra siempre 
    la solución óptima? Justificar.

1.  (★★★) El club de amigos de la república Antillense prepara un ágape en sus instalaciones en la que desea invitar a la máxima 
    cantidad de sus “n” socios. Sin embargo por protocolo cada persona invitada debe cumplir un requisito: Sólo puede asistir si 
    conoce a al menos otras 4 personas invitadas

    a. Nos solicitan seleccionar el mayor número posible de invitados. Proponga una estrategia greedy óptima para resolver el problema.
    b. Los organizadores desean que cada invitado pueda conocer nuevas personas. Por lo que nos solicitan que adicionemos una nueva 
    restricción a la invitación: Sólo puede asistir si NO conoce al menos otras 4 personas invitadas. Modifique su propuesta para 
    satisfacer esta nueva solución.

{::options toc_levels="2" /}
