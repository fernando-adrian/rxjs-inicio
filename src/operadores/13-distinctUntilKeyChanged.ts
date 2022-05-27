import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    
).subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'megaman',
    },
    {
        nombre: 'megaman',
    },
    {
        nombre: 'Zero',
    },
    {
        nombre: 'Dr wily',
    },
    {
        nombre: 'megaman',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'Zero',
    },
]

from (personajes).pipe(
    
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)