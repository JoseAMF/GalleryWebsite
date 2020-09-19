import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AboutMeComponent,
    CarouselComponent,
    ContactComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
