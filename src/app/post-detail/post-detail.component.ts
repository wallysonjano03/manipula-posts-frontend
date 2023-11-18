// post-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  newCommentContent: any;
deletePost(arg0: any) {
throw new Error('Method not implemented.');
}
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(postId).subscribe((post) => {
      this.post = post;
    });
  }
  addComment() {
    const newComment = { content: this.newCommentContent }; // Adapte conforme necessário
    this.postService.addComment(this.post.id, newComment).subscribe((updatedPost) => {
      this.post = updatedPost;
      this.newCommentContent = ''; // Limpe o campo de comentário após adição
    });
  }
}