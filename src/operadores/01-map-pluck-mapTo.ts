import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1,5).pipe(
//     map<number, string>( val => {
//         return (val * 10).toString();
//     })
// )
// .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event=> event.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapto$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyup$.subscribe( console.log );
keyupCode$.subscribe( code => console.log('map', code) );
keyupPluck$.subscribe( code => console.log('pluck', code) );
keyupMapto$.subscribe( code => console.log('mapTo', code) );