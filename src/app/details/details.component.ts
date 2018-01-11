import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Invention } from '../inventions/invention.class';
import { InventionsService } from '../inventions/inventions.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:String;
  invention:Invention;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private inventionService: InventionsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invention = this.inventionService.inventionDetails(+this.id);
  }

  initialize(){
    
  }

}
