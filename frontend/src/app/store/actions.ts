import { Action } from '@ngrx/store';
import { dataFromAPI } from './models';
import { Types172 } from './type';

export class LoadData implements Action {
    readonly type = Types172.LoadData;
    constructor(){}
}

export class LoadDataSucess implements Action {
    readonly type = Types172.LoadDataSuccess;
    constructor(){}
}

export class LoadDataError implements Action {
    readonly type = Types172.LoadDataError;
    constructor(){}
}

export class LoadMap implements Action {
    readonly type = Types172.LoadMap;
    constructor(){}
}

export class LoadMapSuccess implements Action {
    readonly type = Types172.LoadMapSuccess;
    constructor(){}
}

export class LoadMapError implements Action {
    readonly type = Types172.LoadMapError;
    constructor(){}
}