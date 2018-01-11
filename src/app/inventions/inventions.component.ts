import { Component, OnInit } from '@angular/core';
import {Invention} from './invention.class'
import {InventionsService} from './inventions.service'

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'],
  providers: [InventionsService]
})
export class InventionsComponent implements OnInit {

  nameModel:String;
  inventorModel:String;
  yearModel:String;
  imageModel:String;
  inventions:Invention[];

  constructor(private inventionsService:InventionsService) {

    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';

    this.inventions = inventionsService.getInventions();

   }

  ngOnInit() {
  }

  createInvention()
  {
    let newInvention: Invention ={
      name: this.nameModel,
      inventor: this.inventorModel,
      year: this.yearModel,
      image: this.imageModel
    };

    this.inventions.push(newInvention);
  }

}
