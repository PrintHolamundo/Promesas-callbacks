import { buscarHeroe } from './js/callbacks.js';
import './styles.css';

const heroeId = 'capi';


buscarHeroe(heroeId, (err,heroe) => {

    if (err) {
        console.error(err);

    } else {
        console.info(heroe);
    }
});


