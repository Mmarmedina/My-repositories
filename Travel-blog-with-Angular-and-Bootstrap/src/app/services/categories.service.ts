import { Injectable } from '@angular/core';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category.interface';


@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  constructor() { } 

  getAll (): Category [] {
    return CATEGORIES;
  }

  getTitle (pId: number | undefined): Category | undefined {
    const category = CATEGORIES.find (category => category.id === pId);
       
    if (category) {
      return category;
    }else{
      return undefined
    } 

    // if (category) {
    //   return category;
    // }else{
    //   return null
    // }
    
    // if (category) {
    //   return category;
    // }else{
    //   return {}
    // } 
  }

  // Category | undefined
  get (pTitle: string): Category | undefined {
    const category = CATEGORIES.find (category => category.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === pTitle);
    if (category) {
      return category;
    }else{
      return undefined
    } 
  }
}



