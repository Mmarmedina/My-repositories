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
  
  // Devuelve los post de una categoría seleccionada.
  getPostByIdCategory (cat: number): Post[] {
    const posts = POSTS.filter(post => post.id_category === cat);
    return posts   
  }

  // Devuelve el post según el id (un objeto)
  getById (pId: number): Post | undefined {
    const post = POSTS.find (post => post.id === pId);
    return post;
  }
  
  // Aquí en lugar tenía puesto any
  newP (pNew: Post): Post [] {    
    POSTS.push(pNew);    
    return POSTS;
  }
  
}
