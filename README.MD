[![Build Status](https://travis-ci.org/ferclaverino/nodebots-learning.svg?branch=master)](https://travis-ci.org/ferclaverino/nodebots-learning)
# Un nodebot para aprender sobre diseño

La excusa es armar de manera incremental un auto (node bot) para aprender sobre principios y patrones de diseño

## Hoja de ruta

### [1. Control manual](car/)
Sin inteligencia

### 2. Semi autónomo
Con un poco de inteligencia

### 3. Autónomo
El robot toma todas las decisiones

## Setup

Pair bluetooth:

`sudo rfcomm bind /dev/rfcomm0 98:D3:31:40:41:50`

Get keyboard event path:

`cat /proc/bus/input/devices`
