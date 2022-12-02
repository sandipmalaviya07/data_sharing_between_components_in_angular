import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //Mehod:4
  message:string="";
  constructor(private appService:AppService){
    this.appService.getMessage.subscribe(msg => this.message = msg);;
  }

  ngOnInit(): void {
  }

  updateMessage(){
    this.appService.setMessage('This is updated msg from test compoenent.');
  }

}
