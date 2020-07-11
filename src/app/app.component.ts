import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colorLink1:string="";
  colorLink2:string="";
  colorLink3:string="";

  changeLink1 () {
    this.colorLink1 = "red";
    this.colorLink2 = "";
    this.colorLink3 = "";  
  }

  changeLink2 () {
    this.colorLink1 = "";
    this.colorLink2 = "red";
    this.colorLink3 = "";  
  }

  changeLink3 () {
    this.colorLink1 = "";
    this.colorLink2 = "";
    this.colorLink3 = "red";  
  }
}
