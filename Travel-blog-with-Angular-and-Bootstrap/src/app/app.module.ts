import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ButtonComponent } from './components/button/button.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThumbnailPostComponent } from './components/thumbnail-post/thumbnail-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormComponent,
    ViewPostComponent,
    ButtonComponent,
    FilterComponent,
    NavComponent,
    FooterComponent,
    ThumbnailPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }