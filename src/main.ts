import './style.css'

/* import './bases/01-const-let.js';*/
/* import './bases/02-templates-strings'; //is optional tu put the file extention */
import './bases/08-imp-exp';
import { getHeroesByOwner } from './bases/08-imp-exp';
import { Owner } from "./data/heros.data"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`;

console.log(getHeroesByOwner(Owner.DC));