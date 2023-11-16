import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';

const SHARED_COMPONENTS = [FooterComponent, NavbarComponent, TableComponent];

@NgModule({
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class SharedModule {}
