import { from, map, reduce, scan } from "rxjs";
import { createNull } from "typescript";

const numeros = [1,2,3,4,5];

// const totalAcc = (acc, cur) => {
//     return acc + cur;
// }
const totalAcc = (acc, cur) => acc + cur;

// Reduce

from(numeros).pipe(
    reduce(totalAcc, 0)
).subscribe( console.log );

// Scan
from(numeros).pipe(
    scan(totalAcc, 0)
).subscribe( console.log );

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}
const user: Usuario[] = [
    { id: 'fer', autenticado: false, token: null },
    { id: 'fer', autenticado: true, token: 'ABC' },
    { id: 'fer', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc: Usuario, cur: Usuario)=> {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map( state => state.id)  
);

id$.subscribe(console.log);