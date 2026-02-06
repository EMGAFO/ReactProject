


const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;

console.log({ trunks });


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers + 200);

// que es una tupla: es una funcion que devuelve 2 valores

//🤣🤣Tarea: Implementar useState 🤣🤣

/* const userState = (a:string) => {
    return[a , (b:String)=>console.log(b)] as const
}


const [name, setName] = userState('Goku');

console.log(name);
 */

console.log("=*=*=*=*=*=*=*=*=*=*");

  //Tarae corregida Fernando
const useState = (value: string ) => {
    return [
            value, 
            (newValue: string) => {
            console.log(newValue);
        },
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('yuka');       // Imprime "Vegeta"


 