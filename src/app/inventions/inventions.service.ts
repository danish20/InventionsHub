import { Injectable } from '@angular/core';
import {Invention} from './invention.class'
@Injectable()
export class InventionsService {
  rawInventions : Invention[] = [
    {
      name : 'Java',
      inventor : 'James Ghosling',
      year : '1995',
      image: 'https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png'
    } , 
    {
      name : 'Python', 
      inventor : 'Guido van Rosum',
      year: '1991',
      image: 'https://www.python.org/static/opengraph-icon-200x200.png'
    } , 
    {
      name : 'C++',
      inventor : 'Bjarne Stroustrup',
      year : '1983',
      image: 'https://pluralsight.imgix.net/paths/path-icons/c-plus-plus-93c7ddd5cc.png'
    },
    {
      name: 'C Programming Language',
      inventor:'Dennis Ritchie',
      year: '1972',
      image:'http://www.circuitbasics.com/wp-content/uploads/2015/12/C-Programming.png'
    }

  ]
  constructor() { }

  getInventions():Invention[]
  {
    return this.rawInventions;
  }
}
