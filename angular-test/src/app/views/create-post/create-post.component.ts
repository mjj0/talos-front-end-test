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

  createPost(postData: Post) {
    this.postService
      .createPost(postData.title, postData.description, postData.tags)
      .then(() => this.router.navigate(["posts"]));
  }
}
