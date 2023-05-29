import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://recu-angular-backend2.vercel.app/api/';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Si es necesario, incluye aquí los encabezados adicionales requeridos, como la autorización.
    });
    return headers;
  }

  // Ejemplo de petición GET para obtener todos los usuarios
  getUsers(): Observable<any> {
    const url = this.baseUrl + 'usuarios';
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  // Ejemplo de petición POST para crear un usuario
  createUser(user: any): Observable<any> {
    const url = this.baseUrl + 'usuarios';
    const headers = this.getHeaders();
    return this.http.post(url, user, { headers });
  }

  // Ejemplo de petición PUT para actualizar un usuario
  updateUser(userId: string, user: any): Observable<any> {
    const url = this.baseUrl + `usuarios/${userId}`;
    const headers = this.getHeaders();
    return this.http.put(url, user, { headers });
  }

  // Ejemplo de petición DELETE para eliminar un usuario
  deleteUser(userId: string): Observable<any> {
    const url = this.baseUrl + `usuarios/${userId}`;
    const headers = this.getHeaders();
    return this.http.delete(url, { headers });
  }

  // Obtener un usuario a través de su id
  getUserById(userId: string){ 
    const url = this.baseUrl + `usuarios/${userId}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }
}
