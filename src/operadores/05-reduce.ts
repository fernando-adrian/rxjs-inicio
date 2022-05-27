import { interval, reduce, take, tap } from "rxjs";

const numbers = [1,2,3,4,5];

const totalFn = (acc: number, valorActual: number)=> {
    return acc + valorActual;
};

const total = numbers.reduce(totalFn,0);
console.log('total: ' + total);

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalFn, 0)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});