import { Category } from "./category";

export class Menu {
    public id : number;
    public name : string;
    public category : Category;
    public price : number;

    constructor(id : number, name : string, category : Category, price : number){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
