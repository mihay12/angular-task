import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './change-text.directive';
import { RouterModule } from '@angular/router';
import { FirstLinkComponent } from './first-link/first-link.component';
import { SecondLinkComponent } from './second-link/second-link.component';
import { ThirdLinkComponent } from './third-link/third-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    FirstLinkComponent,
    SecondLinkComponent,
    ThirdLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "first-link",
        component: FirstLinkComponent
      },
      {
        path: "second-link",
        component: SecondLinkComponent
      },
      {
        path: "third-link",
        component: ThirdLinkComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
