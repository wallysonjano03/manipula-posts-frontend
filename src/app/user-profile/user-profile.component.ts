// user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  author!: string;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.author = this.route.snapshot.paramMap.get('author');
    this.postService.getPostsByAuthor(this.author).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
