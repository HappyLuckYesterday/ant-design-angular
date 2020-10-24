/* Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { RouterModule } from '@angular/router';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AntDesignModule } from './ant-design.module';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AntDesignModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule,

    DragDropModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,

    LoadingBarModule,

  ],
  declarations: [
    MenuComponent,
    NavBarComponent
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    AntDesignModule,
    DragDropModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule,

    LoadingBarModule,

    MenuComponent,
    NavBarComponent

  ]
})
export class SharedModule { }
