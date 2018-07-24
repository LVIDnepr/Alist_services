import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ListService} from '../list.service';
import {Products} from '../models/products';

@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})
export class ItemsListComponent implements OnInit {
  productsList: Products[];
       
  constructor(private ListService: ListService) {}

  ngOnInit() {
    this.ListService.updateProgressListStatus.subscribe(
      (products: Products[]) => {
        this.productsList = products;
      }
    );
    this.productsList = this.ListService.products;
  }

  ProductCompleted(product: Products) {
    return product.progressListProducts === 'Completed!' ? true : false;
  }

  onProductClicked(index) {
    this.ListService.changeStatus(index);
    this.ProductCompleted(this.productsList[index]); 
  }

  onCloseClicked(index) {
    this.ListService.removeProduct(index);
  }

  onEditClicked(e, index) {
    e.stopPropagation();
    this.ListService.productToEdit.emit({index: index, name: this.productsList[index].productName});
  }
}
