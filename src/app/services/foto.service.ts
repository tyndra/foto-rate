import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { encode } from 'punycode';
import { Observable } from '../../../node_modules/rxjs';

import {FotoInfo} from "../impl/foto.info";

const backend_url = "http://localhost:4200/api/";
const workFolder = 'C:/temp/glacier/';

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  constructor(private http: HttpClient) { 

  }

    getAll(rating: number) : Observable<any>  { 
      let url = backend_url + "fotos/" + encodeURIComponent(workFolder);
      if (rating > 0 && rating <= 5)
        url += "/"  + rating;

      return this.http.get(url);
    }

    getFoto(fi: FotoInfo) : Observable<any> {
      return this.http.get(this.createURL(fi),{responseType: "blob"});
    }

    createURL(fi: FotoInfo) : string {
      return  backend_url + "foto/" + encodeURIComponent(workFolder + fi.name);
    }

    rate(fi: FotoInfo, rating: number) : Observable<any> {
      let url = this.createURL(fi);
      return this.http.put(url, { rating: rating });
    }
}