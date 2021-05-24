import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout203',
  templateUrl: './layout203.component.html',
  styleUrls: ['./layout203.component.scss']
})
export class Layout203Component implements OnInit, AfterViewInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  phoneQuery: MediaQueryList;
  private _phoneQueryListener: () => void;

  @ViewChild('topAppBarEl')
  topAppBarEl!: ElementRef
  private topAppBar!: MDCTopAppBar

  @ViewChild('snavContent')
  snavContent!: MatSidenavContent

  fillerNav = Array.from({length: 3}, (_, i) => `Nav Item ${i + 1}`);

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 840px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.phoneQuery = media.matchMedia('(max-width: 600px)');
    this._phoneQueryListener = () => changeDetectorRef.detectChanges();
    this.phoneQuery.addListener(this._phoneQueryListener);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.topAppBar = new MDCTopAppBar(this.topAppBarEl.nativeElement);
    this.topAppBar.setScrollTarget(this.snavContent.getElementRef().nativeElement);
  }

  ngOnDestroy() {
    this.topAppBar.destroy();
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.phoneQuery.removeListener(this._phoneQueryListener);
  }

}
