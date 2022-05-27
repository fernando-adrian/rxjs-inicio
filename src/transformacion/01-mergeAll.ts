import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResponse } from "../interfaces/github-users.interface";


const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

//helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver pagina';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );
        orderList.append(li)
    }
};

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    // pluck<KeyboardEvent>('target','value'),
    map<KeyboardEvent, string>(evento => evento?.target['value']),
    map<string, Observable<any>>(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
    )),
    mergeAll(),
    // pluck('items')
    map<GithubUsersResponse, GithubUser[]>(resp => resp.items)
).subscribe( mostrarUsuarios);