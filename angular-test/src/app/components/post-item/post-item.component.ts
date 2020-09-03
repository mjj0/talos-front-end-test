import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/post.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToDetailsPage() {
    this.router.navigate(["posts", this.post.id]);
  }
}
