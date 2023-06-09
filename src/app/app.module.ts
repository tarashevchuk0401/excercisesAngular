import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { PositionComponent } from './position/position.component';
import { DebugComponent } from './debug/debug.component';
import { AsyncComponent } from './async/async.component';
import { AddProductComponent } from './async/add-product/add-product.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsComponent } from './materials/materials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GmailComponent } from './gmail/gmail.component';
import { GitComponent } from './git/git.component';
import { DialogComponent } from './materials/dialog/dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  entryComponents: [
    
  ],
  declarations: [
    AppComponent,
    GridComponent,
    PositionComponent,
    DebugComponent,
    AsyncComponent,
    AddProductComponent,
    MaterialsComponent,
    GmailComponent,
    GitComponent,
    DialogComponent,
    ParentComponent,
    ChildComponent,
    QuestionsComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
