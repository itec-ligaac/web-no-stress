import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) {
  }

  public get(): Promise<any> {
    return this.http.get('./assets/destinations.json').toPromise();
  }
}
