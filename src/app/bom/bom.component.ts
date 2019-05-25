import { BomService } from './../bom.service';
import { Component, OnInit } from '@angular/core';
import { BOM } from '../Models/BOM';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BomComponent implements OnInit {

  bom : BOM;

  constructor(private bomService : BomService) { }

  ngOnInit() {
    this.bomService.getBOM().subscribe(bom => {
      this.bom = bom ;
      })
  }

}
