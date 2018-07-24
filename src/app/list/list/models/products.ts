export class Products {
    public productName: string;
    public progressListProducts: string;

    constructor(name: string, status: string) {
        this.productName = name;
        this.progressListProducts = status;
    }
}