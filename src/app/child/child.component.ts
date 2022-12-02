import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() for data sharing from parent to child
  @Input() inputFromParent: string = "";

  //Mehod:4
  message:string="";
  constructor(private appService:AppService){
    
  }
  
  ngOnInit(): void {
    debugger;
    this.appService.getMessage.subscribe(msg => this.message = msg);
    console.log(this.message);
  }

  // @Output() for data sharing from child to parent
  name: string = "This is for parent from child !!!!";  
  @Output() updatedName = new EventEmitter <string> (); 
  PostData() {  
      this.updatedName.emit(this.name);  
  }
  
}

