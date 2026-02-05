



function greet( name: string):string {
    return `Hola ${name} you are the best developer ever😎`
}


const greet2 = (name: string) => `Hola ${name}`;



const message = greet("Emmanuel");
const message2 = greet("\nYuka");


console.log(message, message2);

interface User {
    uid: 'ABC-123',
    username: 'El_papi23',
}

function getUser(): User {

    return {
        uid: 'ABC-123',
        username:  'El_papi23',
    };
}

const getUser2 = () => ({
        uid: 'ABC-123',
        username: 'El_papi23',
    });






const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

//Aprdender el suo de cada tipo de funcion estas y las de flechas

//uno de los benefcios de las funcionas de felcah es qeu no cambia a lo que esta apuntnado el objecto this.
// en las funciones flechas cuandeo se teine que enviar un callback, es mas simple con este tipo de fnunciones de flechas

//las clases y las interfaces son parecidas pero no son iguales
//se mejor utilizar funciones de flechas
//usar funciones tradicionales cuando necesitaos que la eleibilidad sea la elegibilidad sea lo primordiar de esa funcion
//Que es un call back

const myNumbers: number[] = [1,2,3,4,5];


/* //CALLBACK/

    /*========Traditional Function=========*/
/* myNumbers.forEach( function (value) {
    console.log(value);
}) */

    /*========Arrow Function=========*/
/* myNumbers.forEach( (value) => {
    console.log(value);
} ); */

myNumbers.forEach(console.log);