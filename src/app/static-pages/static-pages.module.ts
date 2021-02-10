import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [PageComponent, ContactUsComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
