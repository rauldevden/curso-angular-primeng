import { NgModule } from "@angular/core";

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({

  exports:[
    ButtonModule,
    MenuModule,
    RippleModule,
    MenubarModule,
  ]

})
export class PrimeNgModule{}
