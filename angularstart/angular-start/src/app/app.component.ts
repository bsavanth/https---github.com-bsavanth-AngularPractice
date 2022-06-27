import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-start';
  firstname:string = "Savanth";
  lastname:string = "Kumar"
}

export class student
{

  id:Number =  101;
  name:string = "Savanth Kumar Battikadi"

}
