import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of( 1,2,3,4 );
const interval$ = interval( 1000 ).pipe( take(3) );//...0,1,2
const letras$ = of( 'a','b','c' ).pipe( delay(3000) );

// forkJoin([
//     numeros$,
//     interval$,
//     letras$
// ]).subscribe( console.log );

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
}).subscribe( resp => {
    console.log(resp.num)
    console.log(resp.int)
    console.log(resp.let)
});