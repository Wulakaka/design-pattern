interface Prototype {
    clone();
}

class Product implements Prototype{
    private id: string;
    private price: number;

    Product(id: string, price: number) {
        this.id = id
        this.price = price
    }

    getId() {
        return this.id;
    }

    getPrice() {
        return this.price
    }

    clone() {
        const obj = new Product()
        obj.id = this.id;
        obj.price = this.price;
        return obj
    }
}