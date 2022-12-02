import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  //Method:1
  forParent:string = "This is for parent!!!"
  forChild:string = "This is for child from parent!!!"

  //Method:2
  GetData(name:string){
    this.forParent =  name;
  }

  //Method:3
  @ViewChild(ChildComponent) child:any;  
  ButtonClick() {  
      this.forParent= this.child.name;  
  }
  
}
