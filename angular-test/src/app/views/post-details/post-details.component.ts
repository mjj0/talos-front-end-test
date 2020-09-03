import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post.model";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.fetchPostDetails(id);
  }

  fetchPostDetails(id: string) {
    this.postService
      .fetchPostDetails(id)
      .then((post) => {
        this.post = post;
        this.loading = false;
      })
      .catch(() => this.router.navigate(["posts"]));
  }
}
