import { BOM } from './Models/BOM';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BomService {

  url="http://localhost:8080/BOM/"

  constructor(private http:HttpClient) { }

  getBOM(){
    return this.http.get<BOM>(this.url+"bom_id");
  }

  getBomByOrderItemId(orderItemId : String){
    return this.http.get<BOM>(this.url+"order-item/"+orderItemId);
  }

}
