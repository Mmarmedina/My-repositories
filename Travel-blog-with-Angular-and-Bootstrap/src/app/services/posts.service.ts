import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  getAll(): Post[] {
    return POSTS;
  }
  
  getPostByIdCategory (cat: number): Post[] {

    const posts = POSTS.filter(post => post.id_category === cat);
    return posts
   
  }

  getById (pId: number): Post | undefined {

    const post = POSTS.find (post => post.id = pId);
    return post;

  }

 

  // newPost(post): añadir nuevo post al array de objetos Posts. 

  // getPostsByCategoria(cat)


  
}
