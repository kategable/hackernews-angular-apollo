import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { InMemoryCache } from 'apollo-cache-inmemory'
import {   APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { LinksComponent } from './links/links.component';
import { LinksListComponent } from './links-list/links-list.component';    

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    LinksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpLinkModule,  
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
