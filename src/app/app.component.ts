import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {timer} from 'rxjs';

import {FotoService} from "./services/foto.service";
import {FotoInfo} from "./impl/foto.info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  
  mobileQuery: MediaQueryList;

  opened: boolean;
  isRating: boolean = true;
  filterRating: number = -1;
  filterCat: string = "";
  allFotoInfos: FotoInfo[];
  currentIndex: number = -1;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private fotoService: FotoService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if (this.fotoService.getWorkFolder()){
      this.startWork(-1);
    } else {
      this.displayFotos("c:\\temp\\test");
      this.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  

  private displayFotos(folder: string) {
    this.fotoService.setWorkFolder(folder)
    this.startWork(this.filterRating);
    this.opened = false;
  }

  private startWork(rating: number) {
    this.currentIndex = -1;
    this.fotoService.getAll(rating).subscribe((data: FotoInfo[]) => {
      this.allFotoInfos = data.sort(function(a, b){ 
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
       });
      if (this.allFotoInfos != null && this.allFotoInfos.length > 0) {
        for (let fi of this.allFotoInfos) {
          fi.url = this.fotoService.createURL(fi);
        }
        this.setCurrentIndex(0);
      }
    
    });
  }

  private getCurrentFotoInfo() : FotoInfo {
    return this.allFotoInfos != null && 
          this.currentIndex >= 0 && this.currentIndex < this.allFotoInfos.length ? 
              this.allFotoInfos[this.currentIndex] : null;
  }

  private getCurrentFotoURL() : string {
    let fi = this.getCurrentFotoInfo();

    return fi != null ? fi.url : null;
  }

  private setRateFilter(filter: number){
    this.filterRating = filter;
  }

  private setCatFilter(filter: string){
    this.filterCat = filter;
  }

  private rate(rating: number) {
    let fi = this.getCurrentFotoInfo();
    this.fotoService.rate(fi, rating).subscribe((newFi: FotoInfo) => {
      fi.name = newFi.name;
      fi.rating = newFi.rating;
      fi.url = this.fotoService.createURL(fi);
      if (this.canGoForward())
        this.forward();
      else
        this.currentIndex = -1;
    });
  }  

  private canGoBack(): boolean{
    return this.allFotoInfos.length > 0 && this.currentIndex > 0;
  }

  private canGoForward(): boolean{
    return this.allFotoInfos.length > 0 && this.currentIndex < this.allFotoInfos.length - 1;
  }

  private back(){
    if (this.canGoBack()){
      this.setCurrentIndex(this.currentIndex - 1);
    }
  }

  private forward(){
    if (this.canGoForward()){
      this.setCurrentIndex(this.currentIndex + 1);
    }
  }

  private setCurrentIndex(value: number){
    this.currentIndex = -1;
    var subsrciption = timer(1).subscribe(t=> {
      this.currentIndex = value
      subsrciption.unsubscribe();
    });
  }
}
