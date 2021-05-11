import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pseudo-avatar',
  templateUrl: './pseudo-avatar.component.html',
  styleUrls: ['./pseudo-avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'pseudo-avatar'}
})
export class PseudoAvatarComponent implements OnInit {

  @HostBinding('style.width') public width: string = '90%';
  //@HostBinding('style.height') public height: string = '40px';
  @HostBinding('style.color') @Input() public color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
