import { ActivatedRoute } from '@angular/router';
import { BomService } from './../bom.service';
import { Component, OnInit } from '@angular/core';
import { BOM } from '../Models/BOM';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BomComponent implements OnInit {

  bom : BOM =<BOM> new Object();

  constructor(private bomService : BomService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      let id = para.get("orderItemId");
      this.getBom(id)
    })
    
  }

  getBom(orderItemId : String){
    this.bomService.getBomByOrderItemId(orderItemId).subscribe(bom => {
      this.bom = bom;
      
    })
  }

  

}
