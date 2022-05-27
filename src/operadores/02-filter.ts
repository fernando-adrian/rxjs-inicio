import { fromEvent, of, range } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1)
// ).subscribe(console.log)

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i)
        return val % 2 === 1
    })
)//.subscribe(console.log)

interface Personaje {
    tipo: string,
    nombre: string,
}
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

of(...personajes).pipe(
    filter((personajes) => personajes.tipo === 'heroe')
).subscribe((personajes)=> {
    console.log(personajes)
});

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code ),
    filter( code => code === 'Enter')
);

keyup$.subscribe(console.log);