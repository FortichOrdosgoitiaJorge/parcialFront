import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facultad } from '../models/facultad.model';

@Injectable({ providedIn: 'root' })
export class FacultadService {
  private apiUrl = 'http://localhost:8080/api/facultades';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.apiUrl);
  }

  create(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.apiUrl, facultad);
  }
}
