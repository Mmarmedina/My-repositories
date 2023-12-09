import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent {

  myPost: Post | undefined;

  constructor (
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService){
    this.myPost = {

        id: 0,
        title: "",
        text: "",
        excerpt: "",        
        author: "",
        img: "",
        date: "",
        id_category: 0

    }
  }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe((params:any) => {
      const id = parseInt(params.idpost)
      this.myPost = this.postsService.getById(id);
      console.log (this.myPost)    

    })
  }



}
