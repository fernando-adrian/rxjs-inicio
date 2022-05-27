import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ' + value),
    error: error => console.warn('error' + error),
    complete: () => console.info('completed')
}

const obs$ = new Observable<string>( subscriber =>{

    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.next('Hola');
    subscriber.next('Mundo');

    // subscriber.error('error');
    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('Mundo');
});

obs$.subscribe(observer);
obs$.subscribe()
