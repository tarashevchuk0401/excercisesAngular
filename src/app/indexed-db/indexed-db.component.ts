import { Component, OnInit } from '@angular/core';
import { IndexeddbService } from '../services/indexeddb.service';

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
      this.indexedDB.addData(data).subscribe(d => console.log('added'))

      this.indexedDB.readData().subscribe(d => console.log(d))
  }

}
