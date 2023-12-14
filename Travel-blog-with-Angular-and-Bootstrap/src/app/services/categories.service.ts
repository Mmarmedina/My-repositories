import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category.interface';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

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
    const lowerCaseTitle = (category.value.toLowerCase());
    console.log (lowerCaseTitle);
    const myCategory = CATEGORIES.find (category => category.title === lowerCaseTitle);
    console.log (myCategory)
    return myCategory;
  }
}



