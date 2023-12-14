import { Injectable } from '@angular/core';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor() { } 

  getAll (): any {
    return CATEGORIES;
  }

  getTitle (pId: number | undefined): any {
    const category = CATEGORIES.find (category => category.id === pId);
    return category;
  }

  get (pTitle: string): any {
    const category = CATEGORIES.find (category => category.title.toLowerCase() === pTitle);
    console.log (category);
    return category;
  }
}



