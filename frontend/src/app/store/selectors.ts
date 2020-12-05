import {State} from './states';
import  { createSelector, createFeatureSelector } from '@ngrx/store'

export const getUserState = createFeatureSelector<State>('emplData');

export const getDataProp = createSelector(getUserState,
    (state: State) => state.userData)