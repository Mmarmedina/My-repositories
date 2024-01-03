import { Injectable } from '@angular/core';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category.interface';


@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  constructor() { } 

  // Aquí tenía puesto any
  getAll (): Category [] {
    return CATEGORIES;
  }

  // Aquí tenía puesto any
  getTitle (pId: number | undefined): Category | undefined {
    const category = CATEGORIES.find (category => category.id === pId);
    return category;
  }

  // Aquí tenía puesto any
  get (pTitle: string): Category | undefined {
    const category = CATEGORIES.find (category => category.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === pTitle);
    return category;
  }
}



