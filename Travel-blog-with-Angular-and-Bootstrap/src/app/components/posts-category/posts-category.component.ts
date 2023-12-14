import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category.interface';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';


@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrl: './posts-category.component.css'
})

export class PostsCategoryComponent {
  
  category: Category;
  postsCategory: Post [];
  allCategories: Category [];
  // arrPosts: Post[];

  constructor (
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private postsService: PostsService) {
      this.category = {         
        id: 0,
        title: ""      
      }

      this.postsCategory = [];

      this.allCategories = [];

      // this.arrPosts = [];
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params:any) => {
      const categoryTitle = params.categoryTitle;  
      this.category = this.categoriesService.get(categoryTitle);
      this.postsCategory = this.postsService.getPostByIdCategory(this.category.id);
    })

    // this.arrPosts = this.postsService.getAll();
        
  
  }

  // filterPostByCateogy(cat: number): any {
  //   this.arrPosts = this.postsService.getPostByIdCategory(cat);

  //   if (cat === 0) {
  //     this.arrPosts = this.postsService.getAll()
  //   }
  // }

  onCategory(): void {
    this.allCategories = this.categoriesService.getAll();
    console.log (this.allCategories);
  }
 
}









  






