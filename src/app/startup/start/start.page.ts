import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  @ViewChild('slides',{read: ElementRef}) slides: ElementRef;

  isFirst= true;
  isLast= false;

  constructor() { }

  ngOnInit() {
  }

  prev(slides){
    if(slides.getActiveIndex() === 0){
      console.log('hide prev');
    }
    slides.slidePrev(); // slide to prev
  }

  next(slides){
    if(slides.getActiveIndex() === 4){
      console.log('hide next');
    }
    slides.slideNext(); // slide to next
  }

  slideChanged() {
    this.slides.nativeElement.getActiveIndex().then(index => {
      switch(index){
        case 0: {
          this.isFirst = true;
          break;
        }
        case 4:{
          this.isLast = true;
          break;
        }
        default: {
          this.isFirst=false;
          this.isLast=false;
        }
      }
    });
  }
}
