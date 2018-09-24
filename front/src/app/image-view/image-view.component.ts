import {MediaMatcher} from '@angular/cdk/layout';
import {Component,Input, AfterViewInit} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {timer} from 'rxjs';

@Component({
  selector: 'image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0})),
          
        ]
      )]
    )
  ]
})
export class ImageViewComponent implements AfterViewInit {
  @Input() url: string;
  @Input() fullUrl: string;

  visible: boolean = false;
  fullImageUrl: string;

  constructor() {
  }

  public ngAfterViewInit() {
    this.visible = true;
    var subsrciption = timer(5000).subscribe(t=> {
      this.fullImageUrl = this.fullUrl;
      subsrciption.unsubscribe();
    });

  }
}
