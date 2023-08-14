import { Component, OnInit } from '@angular/core';
import { NewsserverService } from '../services/newsserver.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent  implements OnInit{

  arr : any = []; ;
  res: any = [];

  constructor(private newsServer: NewsserverService){}

  ngOnInit(): void {
    this.newsServer.newsGet3().subscribe((d: any)=> {
      this.arr = d
      console.log(this.arr.results)
      this.res = this.arr.results
    });

   
  }

}
