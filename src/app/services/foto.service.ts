import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { encode } from 'punycode';
import { Observable } from '../../../node_modules/rxjs';

import {FotoInfo} from "../impl/foto.info";

const backend_url = "http://localhost:4200/api/";

@Injectable({
  providedIn: 'root',
})
export class FotoService {
    workFolder: string;

    constructor(private http: HttpClient) { 
    }

    setWorkFolder(wf: string){
      this.workFolder = wf;
    }

    getWorkFolder(): string {
      return this.workFolder;
    }

    getAll(rating: number) : Observable<any>  { 
      let url = backend_url + "fotos/" + encodeURIComponent(this.workFolder);
      if (rating > 0 && rating <= 5)
        url += "/"  + rating;

      return this.http.get(url);
    }

    getFoto(fi: FotoInfo) : Observable<any> {
      return this.http.get(this.createURL(fi),{responseType: "blob"});
    }

    createURL(fi: FotoInfo) : string {
      let fullpath = this.workFolder;
      if (fi.rating > 0 && fi.rating <= 5){
        fullpath += "/" + fi.rating;
      }
      fullpath += "/" + fi.name;

      return  backend_url + "foto/" + encodeURIComponent(fullpath);
    }

    rate(fi: FotoInfo, rating: number) : Observable<any> {
      let url = backend_url + "foto/" + encodeURIComponent(this.workFolder);

      let body = {
        name: fi.name,
        oldRating: fi.rating,
        newRating : rating
      };
      return this.http.put(url, body);
    }
}