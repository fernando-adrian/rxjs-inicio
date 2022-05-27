import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([1,2,3,4,5,6]);
const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('start of obs$');
obs$.subscribe({
    next: (next)=> console.log('Next: ', next),
    error: null,
    complete: () => console.log('End of sequence')
});
console.log('end of obs$');