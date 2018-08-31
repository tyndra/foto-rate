import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { encode } from 'punycode';
import { Observable } from 'rxjs';

import {FotoInfo} from "../impl/foto.info";

const backend_url = "http://localhost:4200/api/";

@Injectable({
  providedIn: 'root',
})
export class FotoService {
    constructor(private http: HttpClient) { 
    }

    getAll(workFolder: string, rating: number, cat: string) : Observable<any>  { 
      let url = backend_url + "fotos/" + encodeURIComponent(workFolder);
      
      let body = {
        rating: rating,
        cat: cat
      };

      return this.http.post(url, body);
    }

    getFoto(workFolder: string, fi: FotoInfo) : Observable<any> {
      return this.http.get(this.createURL(workFolder, fi),{responseType: "blob"});
    }

    createURL(workFolder: string, fi: FotoInfo) : string {
      let fullpath = workFolder;
      
      // if (fi.cat != null && fi.cat.length > 0){
      //   fullpath += "/" + fi.cat;
      // }

      // if (fi.rating > 0 && fi.rating <= 5){
      //   fullpath += "/" + fi.rating;
      // }
      fullpath += "/" + fi.name;

      return  backend_url + "foto/" + encodeURIComponent(fullpath);
    }

    rate(workFolder: string, fi: FotoInfo, rating: number, cat: string) : Observable<any> {
      let url = backend_url + "foto/" + encodeURIComponent(workFolder);

      let body = {
        name: fi.name,
        oldRating: fi.rating,
        newRating : rating,
        oldCat: fi.cat,
        newCat : cat
      };
      return this.http.put(url, body);
    }

    arrange(workFolder: string, rating: number, cat: string) : Observable<any> {
      let url = backend_url + "fotos/" + encodeURIComponent(workFolder);

      let body = {
        rating: rating,
        cat : cat
      };
      return this.http.put(url, body);
    }
}