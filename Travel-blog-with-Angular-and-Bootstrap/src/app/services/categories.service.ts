import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { CATEGORIES } from '../db/categories.db';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // array como propiedad donde crearemos 5 categorías,Playa, Montaña, Ciudad, Rural, Festivales.

  constructor() { }  
  // getAllCategories(): Disponer de un selector de categorías que nos permitan filtrar por categoría. Este se llenará desde una array de categorías del servicio el servicio a través de un método. Esto es que los option del select los coge del servicio categorías?

  getAll (): any {
    return CATEGORIES;
  }

  getTitle (pId: number): any {
    const category = CATEGORIES.find (category => category.id === pId);
    return category;
  }

}



