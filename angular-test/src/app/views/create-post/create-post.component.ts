import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {}

  async createPost(postData: Post) {
    const { id } = await this.postService.createPost(
      postData.title,
      postData.description,
      postData.tags
    );

    if (postData.photoUrl) {
      await this.postService.uploadPostImage(id, postData.photoUrl);
    }

    this.router.navigate(["posts"]);
  }
}
