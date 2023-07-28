import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  user: { id: string; } | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.activatedRoute.snapshot.params['id']
    }
    console.log(this.user)
    // this.activatedRoute.params.subscribe(d => console.log('!!!' + d['id']))
  }

  toAsync() {
    this.router.navigate(['async']);
  }

}
