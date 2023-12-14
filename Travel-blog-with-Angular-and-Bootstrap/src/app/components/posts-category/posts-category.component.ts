import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category.interface';


@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrl: './posts-category.component.css'
})

export class PostsCategoryComponent {

  myCategory: Category;

  constructor (
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService) {
      this.myCategory = {
        id: 0,
        title: "",
      }  
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params:any) => {
      const categoryTitle = params.categoryTitle;      
      console.log (categoryTitle);
      this.myCategory = this.categoriesService.get(categoryTitle);
      console.log (this.myCategory);
    })  
  }
}





