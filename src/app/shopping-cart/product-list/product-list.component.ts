import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data!: import("c:/Users/lenovo/Desktop/Store/src/app/product").Iproduct[];
  filteredString: any;
  constructor(private srvice:ServiceService) { }

  ngOnInit(): void {
  }
  getProductData(){
    this.srvice.getAllData().subscribe(data=>{
      this.data=data
      console.log(data);
      })
  }
  Onclick(){

  }

}
