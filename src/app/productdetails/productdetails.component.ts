import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @Input() list : Subject<any>;
  fulldetails : any[];

  constructor() { }

  ngOnInit() {

    this.list.subscribe(
      det => {
        console.log(det);
        this.fulldetails = det; 
        $("#productinfoModal").modal('show'); 
      },
      error => {
        console.log(error);
      } 
    )
  }

}
