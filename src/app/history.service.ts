import { History } from './shared/history.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { URL_API } from './app.api';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class HistoryService {

    constructor(private http: Http) { }

    public getHistory(): Promise<History[]> {
        return this.http.get(`${URL_API}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

}
