import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'megaman',
    },
    {
        nombre: 'X',
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
        nombre: 'Zero',
    },
]

from (personajes).pipe(
    distinct(p => p.nombre)
    
).subscribe(console.log)