import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor (private server: ServerService){
    
  }

  ngOnInit(): void {
      this.server.userSubject.subscribe(user => {
        console.log(user);
        this.isAuthenticated = user ? true : false
      })
  }
}
