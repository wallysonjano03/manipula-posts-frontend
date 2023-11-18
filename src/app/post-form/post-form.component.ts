// post-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  post: any = {};
  isEditing = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.isEditing = true;
      this.postService.getPost(postId).subscribe((post) => {
        this.post = post;
      });
    }
  }

  savePost() {
    if (this.isEditing) {
      this.postService.updatePost(this.post.id, this.post).subscribe(() => {
        // Lógica após a atualização do post
      });
    } else {
      this.postService.addPost(this.post).subscribe(() => {
        // Lógica após a adição do novo post
      });
    }
  }
}