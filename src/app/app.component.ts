import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy, HostListener  } from '@angular/core';
import {MatDialog} from '@angular/material';
import {timer} from 'rxjs';

import {FotoService} from "./services/foto.service";
import {FotoInfo} from "./impl/foto.info";
import { ConfirmArrangeDialog } from "./impl/confirm-arrange.dialog/confirm-arrange.dialog";
import { CatDefinition } from './impl/cat-definition';


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ZERO = 96
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy  {
  
  mobileQuery: MediaQueryList;

  opened: boolean;
  isRating: boolean = true;
  workFolder: string = "C:\\temp\\test";
  filterRating: number = -1;
  filterCat: string = "";
  includeHigherRating: boolean = true;
  unratedOnly: boolean = false;
  allFotoInfos: FotoInfo[];
  currentIndex: number = -1;
  currentMessage: string = "";
  cats: CatDefinition[] = null;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private dialog: MatDialog,
              private fotoService: FotoService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.fotoService.getCats(this.workFolder).subscribe((data: CatDefinition[]) => {
        this.cats = data;
        if (this.workFolder){
          this.displayFotos();
        } else {
          this.opened = true;
        }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event.keyCode);
    
    if (event.keyCode == KEY_CODE.RIGHT_ARROW)
        this.forward();
    else if (event.keyCode ==  KEY_CODE.LEFT_ARROW)
        this.back();    
    else if (this.isRating && event.keyCode >  KEY_CODE.ZERO && event.keyCode <= KEY_CODE.ZERO + 5)
        this.rate(event.keyCode - KEY_CODE.ZERO );    
    else{
      for (let cat of this.cats) {
        if (cat.key == event.keyCode)
          this.categorize(cat.name);
      }
    }
  }

  private getKeyCode(key: number){
    return String.fromCharCode(key);
  }
  private displayFotos() {
    this.currentIndex = -1;
    this.currentMessage = "Retrieving fotos...";
    this.opened = false;
    this.fotoService.getAll(this.workFolder, 
                            this.unratedOnly ? -100 : this.filterRating, 
                            this.includeHigherRating, this.filterCat).subscribe((data: FotoInfo[]) => {
      this.allFotoInfos = data.sort(function(a, b){ 
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
       });
      if (this.allFotoInfos != null && this.allFotoInfos.length > 0) {
        for (let fi of this.allFotoInfos) {
          fi.url = this.fotoService.createURL(this.workFolder, fi, true);
          fi.fullUrl = this.fotoService.createURL(this.workFolder, fi, false);
        }
        this.setCurrentIndex(0);
      }else{
        this.currentMessage = "No fotos that match current filter criteria.";
        this.opened = true;
      }    
    });
  }

  private arrangeFotos() {
    const dialogRef = this.dialog.open(ConfirmArrangeDialog, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.arrange) {
        this.currentIndex = -1;
        this.currentMessage = "Arranging fotos...";
        this.opened = false;
        this.fotoService.arrange(this.workFolder, this.filterRating, this.includeHigherRating, this.filterCat, result.moveOrf).subscribe((data: any) => {
          this.displayFotos();
        });    
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

  private getCurrentFotoFullURL() : string {
    let fi = this.getCurrentFotoInfo();

    return fi != null ? fi.fullUrl : null;
  }

  private setRateFilter(filter: number){
    this.filterRating = filter;
  }

  private setCatFilter(filter: string){
    this.filterCat = filter;
  }

  private rate(rating: number) {
    let fi = this.getCurrentFotoInfo();
    this.rateAndCategorize(fi, rating, fi.cat);
  }
  
  private categorize(cat: string) {
    let fi = this.getCurrentFotoInfo();
    this.rateAndCategorize(fi, fi.rating, cat);
  }

  private rateAndCategorize(fi: FotoInfo, rating: number, cat: string) {
    this.fotoService.rate(this.workFolder, fi, rating, cat).subscribe((newFi: FotoInfo) => {
      fi.name = newFi.name;
      fi.rating = newFi.rating;
      fi.cat = newFi.cat;
      fi.url = this.fotoService.createURL(this.workFolder, fi, true);
      fi.fullUrl = this.fotoService.createURL(this.workFolder, fi, false);
      if (this.canGoForward()) {
        this.forward();
      } else {
        this.currentIndex = -1;
        this.currentMessage = "You are done!!! If you are Natasha, you did really well!!!";
      }
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
    this.currentMessage = "";
    var subsrciption = timer(1).subscribe(t=> {
      this.currentIndex = value;
      subsrciption.unsubscribe();
    });
  }
}
