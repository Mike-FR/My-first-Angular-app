import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;
   @HostBinding('style.fontSize') myFontSize:string;

  constructor() { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundColor = "yellow";
    this.myFontSize = "2em"
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = "transparent";
    this.myFontSize = "1em"
  }

}
