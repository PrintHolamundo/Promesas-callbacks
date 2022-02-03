import { buscarHeroe } from './js/callbacks.js';
import './styles.css';

const heroeId = 'capi';


buscarHeroe( heroeId, (heroe) => {
    console.log( heroe )    
});


