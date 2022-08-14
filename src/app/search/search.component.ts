import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  dropdownCriteriaList:{id:number,name:string}[]=[
    {id:1,name:'Book Title'},
    {id:2,name:'Author'},
    {id:3,name:'ISBN'},
  ];
  currentSelectedCriteria:number=1;

  constructor() { }

  ngOnInit(): void {
  }
  criteriaSelection(event:Event){
    const criteria = event.target as HTMLInputElement;
    this.currentSelectedCriteria = parseInt(criteria.value);
  }

}
