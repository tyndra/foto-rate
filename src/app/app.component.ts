import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {FotoService} from "./services/foto.service";
import {FotoInfo} from "./impl/foto.info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  opened: boolean;
  filterRating: number = -1;
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
        this.currentIndex = 0;
        for (let fi of this.allFotoInfos) {
          fi.url = this.fotoService.createURL(fi);
        }
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

  private setFilter(filter: number){
    this.filterRating = filter;
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
      this.currentIndex--;
    }
  }

  private forward(){
    if (this.canGoForward()){
      this.currentIndex++;
    }
  }
}
