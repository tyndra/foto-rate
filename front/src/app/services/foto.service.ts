import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { encode } from 'punycode';
import { Observable } from 'rxjs';

import {FotoInfo} from "../impl/foto.info";

const backend_url = "";//"http://localhost:4200/api/";

@Injectable({
  providedIn: 'root',
})
export class FotoService {
    constructor(private http: HttpClient) { 
    }

    getAll(workFolder: string, rating: number, includeHigherRating: boolean, cat: string) : Observable<any>  { 
      let url = backend_url + "fotos/" + encodeURIComponent(workFolder);
      
      let body = {
        rating: rating,
        includeHigherRating: includeHigherRating, 
        cat: cat
      };

      return this.http.post(url, body);
    }

    getCats(workFolder: string) : Observable<any>  { 
      let url = backend_url + "config/cat/" + encodeURIComponent(workFolder);
     
      return this.http.get(url);
    }

    // getFoto(workFolder: string, fi: FotoInfo) : Observable<any> {
    //   return this.http.get(this.createURL(workFolder, fi),{responseType: "blob"});
    // }

    createURL(workFolder: string, fi: FotoInfo, resized: boolean) : string {
      let fullpath = workFolder + "\\" + fi.name;
      let api = "foto/";
      if (resized)
        api += "resize/";

      return  backend_url + api + encodeURIComponent(fullpath);
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

    arrange(workFolder: string, rating: number, includeHigherRating: boolean, cat: string, moveOrf:boolean) : Observable<any> {
      let url = backend_url + "fotos/" + encodeURIComponent(workFolder);

      let body = {
        rating: rating,
        includeHigherRating: includeHigherRating,
        cat : cat,
        moveOrf: moveOrf
      };
      return this.http.put(url, body);
    }
}