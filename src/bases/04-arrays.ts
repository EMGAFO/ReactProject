


/* const myArray: (number|string)[] = [1, 2, 3, 4, 5, 6];

const myArray2 = [...myArray];

myArray2.push(7);
myArray2.push('Hola mundo');

console.log({ myArray, myArray2 });


 */

//No dejar que TypeScript infiera el tipo de los arreglos o de los objectos literales, a menos que sepamos que hacemos
//siempre declararlos.



const myArray: number[] = [1,2,3,4,5,6];


myArray.push(10);

const myArray2 = [...myArray];

myArray2.push(7);

console.log({ myArray, myArray2})