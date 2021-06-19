import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './layout204.component.html',
  styleUrls: ['./layout204.component.scss']
})
export class Layout204Component implements OnInit {

  fillerNav = Array.from({length: 3}, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit(): void {
  }

}
