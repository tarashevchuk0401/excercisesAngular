import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from './Auth';
import { Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  isLoggedIn: boolean = false;
  userSubject  = new Subject<User>()

  urlSignup: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnBZj7TzcO_CIkRfe5_bx-933WFe2vlwU'
  urlLoggin: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnBZj7TzcO_CIkRfe5_bx-933WFe2vlwU'



  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.urlSignup, { email, password, returnSecureToken: true })
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));

  }

  loggin(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.urlLoggin, { email, password, returnSecureToken: true })
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)))
  }

  private handleUser(response: AuthResponseData) {
    const expireDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate,
    )
    console.log(user);
    sessionStorage.setItem("localId", user.localId)
    this.userSubject.next(user);
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'No Errors =)'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exist';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password';
        break;
    }
    return throwError(errorMessage)
  }


  loggIn() {
    this.isLoggedIn = true;
  }

  loggOut() {
    this.isLoggedIn = false;
  }

  testPost(){
    console.log('test post')
  return  this.http.post('https://test-c3b8c-default-rtdb.europe-west1.firebasedatabase.app/' + sessionStorage.getItem("localId") + '.json',  {test: sessionStorage.getItem("localId")})
  }
  testGet(){
    console.log(sessionStorage.getItem("id"))
  return  this.http.get('https://test-c3b8c-default-rtdb.europe-west1.firebasedatabase.app/' + sessionStorage.getItem("localId") + '.json' )
  }
}
