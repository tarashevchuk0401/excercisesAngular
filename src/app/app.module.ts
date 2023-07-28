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
import { RouteComponent } from './route/route.component';
import { AuthComponent } from './auth/auth.component';
import { ServerService } from './services/server.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FirebaseComponent } from './firebase/firebase.component';

import { DateComponent } from './date/date.component';
import { ColoredDirective } from './directives/colored.directive';

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
    RouteComponent,
    AuthComponent,
    NavigationComponent,
    FirebaseComponent,
    DateComponent,
    ColoredDirective,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSortModule,
    HttpClientModule,
  
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log('APP.Mod')
  }
}
