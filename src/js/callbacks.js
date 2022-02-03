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

    callback(hero);

}