import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card/company-card.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyItemListComponent } from './company-item-list/company-item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompanyCardComponent, CompanyItemComponent, CompanyItemListComponent]
})
export class CompanyModule { }
