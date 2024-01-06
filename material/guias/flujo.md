---
math: true
---

# Redes de Transporte
{:.no_toc}


## Contenidos
{:.no_toc}

1. TOC
{:toc}


## Ejercicio resuelto

### Solución

#### Demostración del orden

## Ejercicios propuestos

1.  (★★★) Implementar el algoritmo de Ford-Fulkerson, asumiendo que ya está implementada una función actualizar_grafo_residual, 
    definida como actualizar_grafo_residual(grafo_residual, u, v, valor), que recibe el _grafo residual_, una arista dirigida dada 
    por los _vértices u y v_, y el nuevo _valor_ del flujo a través de la arista (u,v) y actualiza el grafo residual ya teniendo en 
    cuenta el peso anterior de la arista, y su antiparalela. Devolver un diccionario con los valores de los flujos para todas las 
    aristas del grafo original.

1.  (★★★) Dado un flujo máximo de un grafo, implementar un algoritmo que, si se le aumenta la capacidad a una artista, permita 
    obtener el nuevo flujo máximo en tiempo lineal en vértices y aristas. Indicar y justificar la complejidad del algoritmo 
    implementado.

1.  (★★★) Se está formando una nueva comisión de actividades culturales de un pueblo. Cada habitante es miembro de 0 o más 
    clubes, y de exactamente 1 partido político. Cada grupo de interés debe nombrar a un representante ante la nueva 
    comisión de actividades culturales, con las siguientes restricciones: cada partido político no puede tener más de N/2 
    simpatizantes en la comisión, cada persona puede representar a solo un club, cada club debe estar representado por 
    un miembro. Implementar un algoritmo que dada la información de los habitantes (a qué clubes son miembros, a 
    qué partido pertenecen), nos dé una lista de representantes válidos. Indicar y justificar la complejidad del algoritmo 
    implementado.

1.  (★★★) Hacer un seguimiento de obtener el flujo máximo en la siguiente red de transporte, realizando las modificaciones previas 
    que fueran necesarias. Luego, definir cuáles son los dos conjuntos del corte mínimo en dicha red.

    ![grafo bf](../../assets/img/ejercicios/flujo1.png){:width="50%"}

1.  (★★★) Hacer un seguimiento de obtener el flujo máximo en la siguiente red de transporte, realizando las modificaciones previas 
    que fueran necesarias. Luego, definir cuáles son los dos conjuntos del corte mínimo en dicha red.

    ![grafo bf](../../assets/img/ejercicios/flujo2.png){:width="60%"}

1.  (★★★) Carlos tiene un problema: sus 5 hijos no se soportan. Esto es a tal punto, que ni siquiera están dispuestos a caminar 
    juntos para ir a la escuela. Incluso más: ¡tampoco quieren pasar por una cuadra por la que haya pasado alguno de sus 
    hermanos! Sólo aceptan pasar por las esquinas, si es que algún otro pasó por allí. Por suerte, tanto la casa como la 
    escuela quedan en esquinas, pero no está seguro si es posible enviar a sus 5 hijos a la misma escuela. Utilizando lo visto 
    en la materia, formular este problema y resolverlo. Indicar y justificar la complejidad del algoritmo.

1.  (★★★) En un hospital, se tiene un conjunto de médicos y un conjunto de pacientes. Cada médico tiene un horario con franjas 
    horarias disponibles para citas médicas. Nuestro objetivo es emparejar médicos con pacientes de manera que se maximice 
    el número total de citas médicas programadas. Implementar un algoritmo que resuelva dicho problema de manera 
    eficiente. Indicar y justificar la complejidad del algoritmo implementado.

{::options toc_levels="2" /}
