import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    constructor()
    {

    }

    ngOnInit(): void {      
    }

    salesPersonList:SalesPerson[]=[ new SalesPerson("a", "b", "c", 100),
                                    new SalesPerson("m", "n", "o", 200),
                                    new SalesPerson("i", "j", "k", 300),
                                    new SalesPerson("x", "y", "z", 400) ]

  



   


}

