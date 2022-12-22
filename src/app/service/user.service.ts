import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PHP_API_SERVER = "http://localhost/user_api/";
  constructor(private httpClient : HttpClient) { }

  userlogin(user:User) : Observable<User> {
    debugger;
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/authentication.php`, user);
  }
}
