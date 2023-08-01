```typescript
export interface Bike {
    name: string;
    price: string;
}

export class BikeSchema implements Bike {
    name: string;
    price: string;

    constructor(name: string, price: string) {
        this.name = name;
        this.price = price;
    }
}
```