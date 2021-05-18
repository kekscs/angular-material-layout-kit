import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MDCTopAppBar } from '@material/top-app-bar';


@Component({
  selector: 'app-layout101',
  templateUrl: './layout101.component.html',
  styleUrls: ['./layout101.component.scss']
})
export class Layout101Component implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('topAppBarEl')
  topAppBarEl!: ElementRef

  private topAppBar!: MDCTopAppBar

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.topAppBar = new MDCTopAppBar(this.topAppBarEl.nativeElement)
  }

  ngOnDestroy() {
    this.topAppBar.destroy();
  }

}
