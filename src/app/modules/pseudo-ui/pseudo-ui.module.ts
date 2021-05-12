import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// *** Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { PseudoAvatarComponent } from './components/pseudo-avatar/pseudo-avatar.component';
import { PseudoCardComponent } from "./components/pseudo-card/pseudo-card.component";
import { PseudoTextComponent } from './components/pseudo-text/pseudo-text.component';
import { PseudoListCardComponent } from './components/pseudo-list-card/pseudo-list-card.component';
import { PseudoHorizontalCardComponent } from './components/pseudo-horizontal-card/pseudo-horizontal-card.component';
import { PseudoCardMod2Component } from './components/pseudo-card-mod2/pseudo-card-mod2.component';
import { PseudoCategoryComponent } from './components/pseudo-category/pseudo-category.component';


@NgModule({
  declarations: [
    PseudoAvatarComponent,
    PseudoCardComponent,
    PseudoTextComponent,
    PseudoListCardComponent,
    PseudoHorizontalCardComponent,
    PseudoCardMod2Component,
    PseudoCategoryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    PseudoAvatarComponent,
    PseudoCardComponent,
    PseudoTextComponent,
    PseudoListCardComponent,
    PseudoHorizontalCardComponent,
    PseudoCardMod2Component,
    PseudoCategoryComponent
  ]
})
export class PseudoUiModule { }
