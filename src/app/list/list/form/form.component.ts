import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AddItemComponent implements OnInit {
  productName: string = '';
  visible: boolean = true;
  productIdForUpdate: number;
      
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.productToEdit.subscribe(
      (product: {index, name}) => {
        this.visible = false;
        this.productIdForUpdate = product.index;
        this.productName = product.name;
      }
    );
  }

  onCreateProduct() {
    this.listService.onAddProduct(this.productName);
    this.productName = '';
  }

  onUpdateProduct() {
    this.listService.editProduct(this.productIdForUpdate, this.productName);
    this.visible = true;
    this.productName = '';
  }
}
