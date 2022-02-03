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

export const buscarHeroe = (id, callback) => {
    
    const hero = heroes[id];

    if (hero) {
       callback(null, hero);
    } else {
        //error
       callback(`No existe un heroe con el id ${id}`); 
    }   
    // callback(hero);

}