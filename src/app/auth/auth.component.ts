import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Observable, map } from 'rxjs';
import { AuthResponseData } from '../services/Auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isLoginMode = false;
  errorText: string = '';
  result: any;

  constructor(private server: ServerService, private roter : Router) { }


  onFormSubmit(authForm: NgForm) {

    let authObservable: Observable<AuthResponseData>

    if (authForm.invalid) {
      return;
    }
    if (this.isLoginMode) {
      authObservable = this.server.loggin(authForm.value.email, authForm.value.password)


    } else {
      authObservable = this.server.signUp(authForm.value.email, authForm.value.password)
      // .subscribe(d => {
      //   console.log(d);
      //   this.errorText = '';
      // },
      //   errorRes => {
      //     switch (errorRes.error.error.message) {
      //       case 'EMAIL_EXISTS':
      //         this.errorText = 'Email alredi exist'
      //     }
      //   }
      // )
    }

    authObservable.subscribe(d => {
      console.log(d);
      this.errorText = '';
      // this.roter.navigate(['navigation']);

      sessionStorage.setItem("id" , authForm.value.email )
    },
      errorRes => {
        // switch (errorRes.error.error.message) {
        //   case 'EMAIL_EXISTS':
        //     this.errorText = 'Email alredi exist'
        // }
        console.log(errorRes);
        this.errorText = errorRes;

      }
    )

    console.log(authForm.value)
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  testPost(){
    this.server.testPost().subscribe()
  }

  testGet(){
    this.server.testGet().pipe(
      // map(item => Object.values(item)),
      map(item => Object.values(item),
      map((i: any) => i.test) 
      )).subscribe( d => {
      console.log(d);
      this.result = d.map(i => i.test)
      
    })
  }

}
