import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GraphComponent} from './d3/visuals/graph/graph.component';
import {NodeVisualComponent} from './d3/visuals/node/node.component';
import {LinkVisualComponent} from './d3/visuals/link/link.component';
import {ZoomableDirective} from './d3/directives/zoomable.directive';
import {DraggableDirective} from './d3/directives/draggable.directive';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './modules/material.module';
import { BitcoinComponent } from './compoents/bitcoin/bitcoin.component';
import { LitecoinComponent } from './compoents/litecoin/litecoin.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    ZoomableDirective,
    DraggableDirective,
    BitcoinComponent,
    LitecoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
