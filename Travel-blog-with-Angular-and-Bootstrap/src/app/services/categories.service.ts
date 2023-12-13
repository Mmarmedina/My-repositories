import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { CATEGORIES } from '../db/categories.db';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor() { } 
  getAll (): any {
    return CATEGORIES;
  }
  getTitle (pId: number): any {
    const category = CATEGORIES.find (category => category.id === pId);
    return category;
  }
}



