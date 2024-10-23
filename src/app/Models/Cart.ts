import { environment } from "src/Environment/Environment";
import { Cartitem } from "./Cartitem";
import { CART_ID } from "../app.constant";
import {   UtilService } from "../Services/UtilService.service";

export class Cart {

    id: string;
    items: Cartitem[];
    total: number;
    tax: number;
    taxRate: number;
    grandTotal: number;
    userId: number;
    createdDate?: string;

    constructor() {
        this.id = this.getCartId();
        this.userId = 0;
        this.items = [];
        this.total = 0;
        this.tax = 0;
        this.grandTotal = 0;
        this.taxRate = environment.tax.taxRate;
    }

    getCartId() {
        let Cid = localStorage.getItem(CART_ID);
        if (Cid==undefined) 
        {
        let id=UtilService.GenerateGuid();
        localStorage.setItem(CART_ID,id);
          return id;
        }else{
            return Cid
        }
    }

}