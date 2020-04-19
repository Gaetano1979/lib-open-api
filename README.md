# Api tempo per nome, zipCode e cordinate
Libreria per ricevere le informazioni di una determinta citta.

## Uso
### Come importarlo per js e ts

```
js
const lib = require('modulo');
ts
import lib from 'modulo'
import {LOCAL_URL,key} from "./costanti";
import {ApiTemp} from "./services";
```
### Come Usarlo
* Scrivendo Nome

````
let api = new ApiTemp(LOCAL_URL,"metric",);
api.buscarNome('nomeCitta')
.then(console.log)
.catch(console.log);
````
### Risposta
``{
    coord: { lon: 7.72, lat: 44.85 },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'pioggia leggera',
        icon: '10d'
      }
    ],
    base: 'stations',
    main: {
      temp: 286.15,
      feels_like: 285.61,
      temp_min: 286.15,
      temp_max: 286.15,
      pressure: 1013,
      humidity: 100
    },
    visibility: 10000,
    wind: { speed: 2.1, deg: 230 },
    clouds: { all: 75 },
    dt: 1587313257,
    sys: {
      type: 1,
      id: 6748,
      country: 'IT',
      sunrise: 1587271026,
      sunset: 1587320329
    },
    timezone: 7200,
    id: 3180496,
    name: 'Carmagnola',
    cod: 200
  }``
