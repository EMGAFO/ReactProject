interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    },
}

/* const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 27
} */

console.log(ironman);

//const spiderman = {...ironman};   /*this is the express operator: esparcimos las propiedades de ironman a spiderman | operador express*/
/* const spiderman = structuredClone(ironman); // structuredCloen for create a clone , braking the references. 

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San Jose';

console.log(ironman, spiderman); */


//investigar las interfaces