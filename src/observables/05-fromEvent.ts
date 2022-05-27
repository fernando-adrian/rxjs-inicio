import { fromEvent } from "rxjs";

//eventos del dom
const src$1 = fromEvent<MouseEvent>(document,'click');
const src$2 = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next',val)
};

src$1.subscribe( ({x,y}) => {
    console.log(x)
    console.log(y)
} );
src$2.subscribe( ({key}) => console.log(key) );