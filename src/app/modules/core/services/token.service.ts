import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem("@bookstore/token", token)
  }

  getToken(): string {
    return localStorage.getItem('@bookstore/token')
  }
}
