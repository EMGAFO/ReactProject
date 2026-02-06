import { heroes, Owner, type Hero} from "../data/heros.data"


const getHeroById = (id:number): Hero | undefined => {

    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

/*     if ( !hero) {
        throw new Error(`No existe un heroe con id ${ id }`);
    } */

    return hero;
};



/* console.log(getHeroById(3));
 */

export const getHeroesByOwner = (owner: Owner): Hero => {
    const heroesByOwner = heroes.filter((hero) =>  hero.owner  === owner);
    return heroesByOwner;
};

//versionn mas corta , mas corta no simpre e slo mejor
/* export const getHeroesByOwner = (owner: Owner) => 
    heroes.filter((hero) => hero.owner === owner); */