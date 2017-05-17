export class Item {
    public name: string;
}
export class Category {
    public name: string;
    public items: Item[];
}
export class Room {
    public name: string;
    public categories: Category[];
}