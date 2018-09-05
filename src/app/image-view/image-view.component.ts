import {MediaMatcher} from '@angular/cdk/layout';
import {Component,Input } from '@angular/core';

@Component({
  selector: 'image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent  {
  @Input() url: string;
  @Input() fullUrl: string;


  constructor() {
  }

}
