import { Component, OnInit, ViewEncapsulation, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'pseudo-text',
  templateUrl: './pseudo-text.component.html',
  styleUrls: ['./pseudo-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PseudoTextComponent implements OnInit {
  @ViewChild('template') private template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    //https://stackoverflow.com/questions/38716105/angular2-render-a-component-without-its-wrapping-tag
    // Тут про то как быть с template
  }

}
