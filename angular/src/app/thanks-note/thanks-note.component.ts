import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
const confetti = require('canvas-confetti')
@Component({
  selector: 'app-thanks-note',
  templateUrl: './thanks-note.component.html',
  styleUrls: ['./thanks-note.component.css']
})
export class ThanksNoteComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.surprise();
  }


  public surprise(): void {
    const canvas = this.renderer2.createElement('canvas');


    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true,
    });
    myConfetti();
  }
}
