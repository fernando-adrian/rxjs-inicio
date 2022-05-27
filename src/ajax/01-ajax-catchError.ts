import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { AjaxError } from 'rxjs/internal/ajax/errors';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/usersXXXXXXXXX?per_page=5';

const manejaErrores = (response: Response) => {
    if ( !response.ok ){
        throw new Error( response.statusText );
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:',err.message);
    return of([]);
}

// const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en los usuarios', err) );
    
// fetchPromesa
// .then( manejaErrores )
// .then( resp => resp.json() )
// .then( data => console.log('data:', data) )
// .catch( err => console.warn('error en los usuarios', err) );

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
).subscribe( users => console.log('usuarios:', users) );
