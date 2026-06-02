import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torneo } from '../models/torneo.model';

@Injectable({ providedIn: 'root' })
export class TorneoService {
  private apiUrl = 'http://localhost:8080/api/torneos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(this.apiUrl);
  }

  create(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(this.apiUrl, torneo);
  }
}
