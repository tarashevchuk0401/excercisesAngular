import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {
  private dbName = 'YourDBName';
  private version = 1;
  private storeName = 'test';

  constructor(private http: HttpClient) { }

  openDB(): Observable<any> {
    return new Observable((observer) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true, });
      };

      request.onsuccess = (event: any) => {
        const db = event.target.result;
        observer.next(db);
        observer.complete();
      };

      request.onerror = (event: any) => {
        observer.error('Error opening database');
      };
    });
  }

  readData(): Observable<any>{
    return new Observable((observer)=> {
      this.openDB().subscribe(db => {
        const transaction = db.transaction([this.storeName], 'readonly');
        const store = transaction.objectStore(this.storeName);

        const request = store.getAll();


        request.onsuccess = (event: any) => {
          const data = event.target.result;
          observer.next(data);
          observer.complete();
        };

        request.onerror = (error: any) => {
          observer.error('Error fetching data: ' + error.target.error.message);
        };      })
    })
  }

  addData(data: any): Observable<any> {
    return new Observable((observer) => {
      this.openDB().subscribe((db: any) => {
        const transaction = db.transaction([this.storeName], 'readwrite');
        const store = transaction.objectStore(this.storeName);

        const request = store.add(data);

        request.onsuccess = () => {
          observer.next('Data added successfully');
          observer.complete();
        };

        request.onerror = (error: any) => {
          observer.error('Error adding data: ' + error.target.error.message);
        };
      });
    });
  }
}
