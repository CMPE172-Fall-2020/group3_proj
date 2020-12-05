import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from './states';
import * as Types from './type';
import  { map, catchError } from 'rxjs/operators'
import * as ActionsSub from './actions';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class EffectsClass {
    constructor(
        private actions: Actions,
        private store: Store<State>,
        private httpClient: HttpClient
    ){}

    fetchMapData = this.actions.pipe(
        ofType<ActionsSub.LoadMap>(Types.Types172.LoadMap),
        map(action => {
            return this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
            .pipe(
              map(() => {
                  new ActionsSub.LoadMapSuccess()
              }),
              catchError(() => {
                  return of(new ActionsSub.LoadMapError())
              }),
            );
        }
    )
}