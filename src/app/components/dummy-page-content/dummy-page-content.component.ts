import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dummy-page-content',
  templateUrl: './dummy-page-content.component.html',
  styleUrls: ['./dummy-page-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyPageContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
