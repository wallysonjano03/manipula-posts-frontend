import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      // Atualize a lista de posts após a exclusão
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
}