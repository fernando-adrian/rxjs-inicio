import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = range(1,5);

numbers$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100;
    }),
    map( val => val * 10),
    tap( {
        next: valor => console.log('despues',valor),
        complete: () => console.log('fin')
    }),
).subscribe(val => console.log('subs', val));