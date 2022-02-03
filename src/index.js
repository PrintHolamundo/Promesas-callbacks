import { buscarHeroe as buscarHeroeCallback } from './js/callbacks.js';
import { buscarHeroe } from './js/promesas.js';

import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

buscarHeroe();

// buscarHeroe(heroeId1, (err,heroe1) => {

//   if (err) { return console.log(err); }

//   buscarHeroe(heroeId2,(err,heroe2) => {
//       if (err) { return console.log(err); }
//       console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//   })
// });

buscarHeroe(heroeId1).then(heroe => {
    console.log(`Enviando a ${heroe.nombre} a la mision`);
})

console.log('Fin del programa');

