import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FilmsComponent } from './films/films.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    FilmsComponent,
    HighlightDirective,
    DisplayMoviesDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }