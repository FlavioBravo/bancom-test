import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { CreatePostComponent } from './features/dashboar/components/create-post/create-post.component';

@NgModule({
  declarations: [AppComponent, CreatePostComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
