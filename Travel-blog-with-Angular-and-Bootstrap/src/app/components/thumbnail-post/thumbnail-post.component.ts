import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-thumbnail-post',
  templateUrl: './thumbnail-post.component.html',
  styleUrl: './thumbnail-post.component.css'
})
export class ThumbnailPostComponent {

  @Input () post: Post;

  constructor() {

    this.post = {
      id: 0,
      title: "",
      text: "",
      excerpt: "",
      author: "",
      img: "",
      date: "",
      id_category: 0,
    }
  }
}
