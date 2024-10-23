export class Cartitem {
    id?: number;
    total: number = 0;
    constructor
    (
        public ItemId: number,
        public name: string,
        public imageUrl: string,
        public unitPrice:number,
        public Quantity:number
    ) {  }
}