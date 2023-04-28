
import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  @Input() post!:Post;

  constructor( public postService:PostService ) {}

  like() {
    this.postService.like(this.post.id);
  }

  apagar() {
    this.postService.apagar(this.post.id);
  }
}
