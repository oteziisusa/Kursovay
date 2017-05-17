import { Component } from '@angular/core';
import { Room, Category, Item } from '../shared/rooms-tree.model';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public rooms: Room[];

    constructor() {
        this.rooms = []
    }
    ngOnInit() {
        this.fillCabinet();
    }
    private fillCabinet() {
        for (let i = 0; i < 10; i++) {
            let cabinet = new Room();
            cabinet.name = "Cabinet" + i;
            cabinet.categories = this.fillCategories();
            this.rooms.push(cabinet);
        }
    }
    private fillCategories() {
        let categories = [];
        for (let i = 0; i < 5; i++) {
            let category = new Category()
            category.name = "Category" + i;
            category.items = this.fillItems();
            categories.push(category);
        }
        return categories;
    }
    private fillItems() {
        let items = [];
        for (let i = 0; i < 5; i++) {
            let item = new Item();
            item.name = "Item" + i;
            items.push(item);
        }
        return items;
    }
}
