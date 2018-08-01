import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  { path:'', component:NameComponent},
  { path: 'display', component: DisplayComponent },
  { path: 'update', component: NameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    DisplayComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
