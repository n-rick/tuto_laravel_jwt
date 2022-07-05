import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

let user: User;
const urlApi = 'http://127.0.0.1:8000/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Inscription :
  register(user: User): Observable<any> {
    return this.http.post(urlApi + 'register', user);
  }

  // Login :
  signin(user: User): Observable<any> {
    return this.http.post<any>(urlApi + 'login', user);
  }

  // Accès au profil de l'utilisateur
  profileUser(): Observable<any> {
    return this.http.get(urlApi + 'user-profile');
  }
}
