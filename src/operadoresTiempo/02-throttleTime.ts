import { asyncScheduler, debounceTime, distinct, distinctUntilChanged, fromEvent, map, of, pluck, throttleTime } from "rxjs";


const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
)//.subscribe( console.log );

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input,'keyup');

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe( console.log );