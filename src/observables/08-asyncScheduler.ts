import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 1000);
// setInterval(() => {}, 1000);

const wave = () => console.log('hello world');
const wave2 = nombre => console.log(`hello ${nombre}`);

// asyncScheduler.schedule( wave, 2000 );
// asyncScheduler.schedule( wave2, 2000, 'Fernando' );

const subs = asyncScheduler.schedule(function (state){
    console.log('state', state);

    this.schedule( state + 1, 1000);
}, 3000, 0)


// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);