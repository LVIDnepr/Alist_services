import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './list/list.component';
import { ItemsListComponent } from './list/itemList/itemList.component';
import { AddItemComponent } from './list/form/form.component';
import { ListService } from './list/list.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ToDoListComponent
  ],
  providers: [
    ListService
  ],
  declarations: [ToDoListComponent, ItemsListComponent, AddItemComponent]
})
export class ToDoListModule { }
