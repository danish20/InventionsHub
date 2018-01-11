import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  detailModel:String;
  totalInventions:number;

  constructor(
    private router:Router,
    private inventionsService:InventionsService) {

    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
    this.detailModel = '';

    this.inventions = inventionsService.getInventions();
    this.totalInventions = this.inventions.length;

   }

  ngOnInit() {
  }

  createInvention()
  {
    this.totalInventions+=1;
    let newInvention: Invention ={
      id: this.getId(),
      name: this.nameModel,
      details: this.detailModel,
      inventor: this.inventorModel,
      year: this.yearModel,
      image: this.imageModel
    };

    this.inventions.push(newInvention);
    this.nameModel = this.yearModel = this.inventorModel = this.detailModel = ''; 
  }

  details(id)
  {
    this.router.navigate(['/details',id]);
  }

  getId()
  {
    return this.totalInventions;
  }

}
