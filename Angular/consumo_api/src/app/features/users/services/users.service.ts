import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usersModel } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private api = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getUsers(): Observable<usersModel[]>{
    return this.http.get<usersModel[]>(this.api);
  }
}
