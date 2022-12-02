import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: 'test',  
    component:TestComponent
  },
  {
    path: 'child',  
    component:ChildComponent
  }
];

@NgModule({    
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
