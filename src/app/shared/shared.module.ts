import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const SHARED_COMPONENTS = [FooterComponent, NavbarComponent];

@NgModule({
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  imports: [CommonModule, RouterModule, MatButtonModule],
})
export class SharedModule {}
