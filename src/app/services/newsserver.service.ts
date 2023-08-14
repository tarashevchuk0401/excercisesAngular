import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsserverService {

  info :string = '17:07';
  
  constructor( private http : HttpClient) { }

  newsGet(){
  return  this.http.get('https://api.spaceflightnewsapi.net/v4/articles/?limit=3.json')
  }

  newsGet3(){
    return  this.http.get('https://api.spaceflightnewsapi.net/v4/articles/?limit=50&offset=1.json')

  }
}
