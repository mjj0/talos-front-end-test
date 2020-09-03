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
  previewImage: string | ArrayBuffer;
  file: File;
  @Output() submit = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  onSelectImage(e) {
    const input = e.target;
    if (input.files && input.files.length) {
      this.previewImage = "";
      const reader = new FileReader();
      this.file = input.files[0];

      reader.onload = (loadEvent) => {
        this.previewImage = loadEvent.target.result;
      };

      reader.readAsDataURL(this.file);
    }
  }

  onSubmit() {
    this.submit.emit({
      title: this.title,
      description: this.description,
      tags: this.tags,
      photoUrl: this.file,
    });
  }
}
