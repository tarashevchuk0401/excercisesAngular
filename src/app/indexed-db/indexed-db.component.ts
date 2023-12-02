import { Component, OnInit } from '@angular/core';
import { IndexeddbService } from '../services/indexeddb.service';
import { combineAll, combineLatest, combineLatestAll, interval, of } from 'rxjs';

@Component({
  selector: 'app-indexed-db',
  templateUrl: './indexed-db.component.html',
  styleUrls: ['./indexed-db.component.scss']
})
export class IndexedDBComponent implements OnInit{

  constructor(private indexedDB: IndexeddbService){}

  ngOnInit(): void {


    let data = {"test": 222}
      this.indexedDB.openDB().subscribe()
      this.indexedDB.addData(data).subscribe()

      this.indexedDB.readData().subscribe();

      this.combine()
  }

  combine(){
    let aaa =of('a', 'b', 'c');
    let bbb = of(1,2,3);

  

    combineLatest<[string, number]>(aaa, bbb).subscribe(d => console.log(d))
  }

  arr(){
    
    let arr = new Array();
    arr.push(221);

    const getNum = (item: number | undefined) => {
      if(item){
        console.log(item.toString())

      }
    }

    getNum(undefined)
  }

}
