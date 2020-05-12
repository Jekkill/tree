import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { ListComponent } from './list/list.component';
import { NodeComponent } from './node/node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListElementComponent } from './list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ListComponent,
    NodeComponent,
    ListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
