import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/models/post.model";

@Component({
  selector: "app-post-details-form",
  templateUrl: "./post-details-form.component.html",
  styleUrls: ["./post-details-form.component.scss"],
})
export class PostDetailsFormComponent implements OnInit {
  title: string;
  description: string;
  tags: string[] = [];
  @Output() submit = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submit.emit({
      title: this.title,
      description: this.description,
      tags: this.tags,
    });
  }
}
