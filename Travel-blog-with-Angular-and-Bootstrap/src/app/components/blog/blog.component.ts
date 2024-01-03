import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {

  arrPosts: Post[];
  
  constructor (private postService: PostsService) {
    this.arrPosts = [];
  }

  // Cargar todos los post al renderizar la página.
  ngOnInit(): void {
    this.arrPosts = this.postService.getAll();
  }

  // Llama al servicio de categorías y devuelve array post todos los post de la categoría seleccionada en el filtro.
  filterPostByCateogy(cat: number): any {
    this.arrPosts = this.postService.getPostByIdCategory(cat);

    if (cat === 0) {
      this.arrPosts = this.postService.getAll();
    }
  }

}
