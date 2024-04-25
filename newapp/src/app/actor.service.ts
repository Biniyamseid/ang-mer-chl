import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorsResponse } from './actors-response';


@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = 'https://swapi.tech/api/people/';

  constructor(private http: HttpClient) { }

  getActors(): Observable<ActorsResponse> {
    return this.http.get<ActorsResponse>(this.apiUrl);
  }
}