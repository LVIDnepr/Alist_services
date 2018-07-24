import { Injectable, EventEmitter } from '@angular/core';

import {Products} from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  progressListStatus: string = 'Working';

  products: Products[] = [
      new Products('Beer', this.progressListStatus),
      new Products('Pork', this.progressListStatus)
  ];

  updateProgressListStatus = new EventEmitter<Products[]>();
  productToEdit = new EventEmitter<object>();

  addProduct(productsArr: object[], productName: string, productStatus: string): any {
      const newProductsArr: object[] = [{
          productToEdit: productName,
          progressListProducts: productStatus
      }];  
      productsArr = productsArr.concat(newProductsArr);
      return productsArr;
  }

  onAddProduct(productName: string) {
      this.products = this.addProduct(this.products, productName, this.progressListStatus);
      this.updateProgressListStatus.emit(this.products);
  }

  editProduct(index: number, updatedProductName: string) {  
      this.products[index].productName = updatedProductName;
      this.products[index].progressListProducts = this.progressListStatus;     
      this.updateProgressListStatus.emit(this.products);
  }

  changeStatus(index: number) {
      this.products[index].progressListProducts = 'Completed!';
  }

  removeProduct(index: number) {
      this.products.splice(index, 1);
  }
}
