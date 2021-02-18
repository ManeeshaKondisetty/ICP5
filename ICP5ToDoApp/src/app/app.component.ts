import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public  newToDoItem = '';
  // define list of items
  public toDoItems: string[] = [];
  public  completedItems: string[] = [];

  // Write code to push new item
  // tslint:disable-next-line:typedef
  public submitNewItem() {
    if (this.newToDoItem === ''){

    }
    else {
      this.toDoItems.push(this.newToDoItem);
      this.newToDoItem = '';
    }
  }

  // Write code to complete item
  public completeItem(strikex: string , index: number) {
    this.toDoItems.splice(index, 1);
    this.completedItems.push(strikex);
  }

  // Write code to delete item
  public deleteItem(index: number) {
    this.toDoItems.splice(index,1);
  }

}
