import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/Environment';

declare const CryptoJS: any;
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  static GenerateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  Encrypt(data: any): any 
  {
    let jsonData = JSON.stringify(data);
    console.log(`Encrypt Json Data is ${data}`)
    let encData = CryptoJS.AES.encrypt(jsonData, environment.encKey);
    console.log(`Encrypt Json Data is ${encData}`)
    //let encData = CryptoJS.enc.Hex.parse(jsonData, environment.encKey);
    return encData.toString();
  }

  Decrypt(encData: any): any 
  {
    var bytes = CryptoJS.AES.decrypt(encData.toString(), environment.encKey);
    var data = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(data);
  }


  

}











































// / aur /: Yeh slashes regular expression ka start aur end dikhate hain. In dono slashes ke beech jo pattern likha hota hai, wo define karta hai ki kaunse characters ko dhoondhna hai.

// [xy]: Yeh square brackets ke andar x aur y diye gaye hain. Iska matlab hai ki regex ko string mein x ya y character ko dhoondhna hai. Brackets ka matlab hota hai "in dono characters mein se koi bhi match ho".

// Example: Agar string "xxyyzz" ho, toh yeh pattern x aur y dhoondhega aur inko match karega.
// g (global flag): Yeh flag batata hai ki match ko puri string mein har jagah dhoondhna hai, sirf pehla match hi nahi. Yaani, agar string mein multiple x aur y hain, toh sabhi ko find aur replace karega.