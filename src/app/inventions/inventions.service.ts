import { Injectable } from '@angular/core';
import {Invention} from './invention.class'
@Injectable()
export class InventionsService {
  rawInventions : Invention[] = [
    {
      id: 1,
      name : 'Java',
      inventor : 'James Ghosling',
      year : '1995',
      details:'Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.',
      image: 'https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png'
    } , 
    {
      id: 2,
      name : 'Python', 
      inventor : 'Guido van Rosum',
      year: '1991',
      details:'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code.',
      image: 'https://www.python.org/static/opengraph-icon-200x200.png'
    } , 
    {
      id: 3,
      name : 'C++',
      inventor : 'Bjarne Stroustrup',
      year : '1983',
      details:'C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
      image: 'https://pluralsight.imgix.net/paths/path-icons/c-plus-plus-93c7ddd5cc.png'
    },
    {
      id: 4,
      name: 'C Programming Language',
      inventor:'Dennis Ritchie',
      year: '1972',
      details:'C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations.',
      image:'http://www.circuitbasics.com/wp-content/uploads/2015/12/C-Programming.png'
    }

  ]
  constructor() { }

  getInventions():Invention[]
  {
    return this.rawInventions;
  }

  inventionDetails( id ) : Invention { 
    for ( var i = 0 ; i < this.rawInventions.length ; i++ ) {
      if ( this.rawInventions[i].id == id )  {
        return this.rawInventions[i]; 
      }
    }
    return null; 
   }
}
