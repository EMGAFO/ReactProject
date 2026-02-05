


const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const { key, name:ironmanName, age, } = person; 

//const name = person.name;
//const age = person.age;
//const key = person.key;

console.log({ ironmanName, age, key });

interface Hero {
    name: string,
    age: number;
    key: string;
    rank?:string
}
//el ? en rank? , indicate us that is an optional parametter

const useContext = ({  key, name, age, rank = 'sin rango' }: Hero) => {
    return {
        keyName: 'ABC',
        user: {
            name,
            age,
        },
        rank: rank
    };
};

const { 
    rank, 
    keyName,  
    user: { name },
} = useContext(person);

console.log({ rank, keyName, name });





//Conceptos a invetigar destructuracoion 
















