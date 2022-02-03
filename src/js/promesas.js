const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Super fuerza'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Super armadura'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Super telaraña'
    }
}


export const buscarHeroe = (id) => {

    const hero = heroes[id];

    return new Promise((resolve, reject) => {
        if (hero) {
            resolve(hero);
        } else {
            //error
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}