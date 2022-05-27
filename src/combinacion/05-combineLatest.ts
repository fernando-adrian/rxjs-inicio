import { combineLatest, fromEvent, map, merge } from "rxjs";


// const keyup$ = fromEvent( document, 'keyup' );
// const click$ = fromEvent( document, 'click' );

// combineLatest([
//     keyup$.pipe(
//         map( ev => ev.type)
//     ),
//     click$.pipe(
//         map( ev => ev.type)
//     )] )
//         .subscribe( console.log );

const input1 = document.createElement( 'input' );
const input2 = document.createElement( 'input' );

input1.placeholder = 'email@gmail.com';
input2.placeholder = 'password';

document.body.append( input1, input2 );

//helpers
const getInputStream = ( elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>( elem, 'keyup')
            .pipe(
                map<KeyboardEvent, string>(ev => ev.target['value'])
            )
}

combineLatest([
    getInputStream( input1 ),
    getInputStream( input2 ),
]).subscribe( console.log )