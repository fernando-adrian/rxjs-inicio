import { of, from } from "rxjs";

//of: toma argumentos y genera una secuencia

//from: array, promise, iterable, observable

const observer = {
    next: val => {
        console.log('next: ' + val);
    },
    complete: () => {
        console.log('complete');
    }
};

const myGenerator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();

// for(let id of myIterable){
//     console.log(id);
// }

from(myIterable).subscribe( observer );



// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('fernando');
// const source$ = of('fernando');

const source$ = from( fetch('https://api.github.com/users/klerith') );

// source$.subscribe(async (resp) => {
//     console.log( resp.url );

//     const dataResp = await resp.json();
//     console.log(dataResp);

// } );