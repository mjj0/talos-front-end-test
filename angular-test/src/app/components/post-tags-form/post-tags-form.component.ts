import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-post-tags-form",
  templateUrl: "./post-tags-form.component.html",
  styleUrls: ["./post-tags-form.component.scss"],
})
export class PostTagsFormComponent implements OnInit {
  tags: string[] = [];
  tagName: string;
  @Output() change = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit() {}

  emitChanges() {
    this.change.emit(this.tags);
  }

  addTag() {
    if (!this.tagName) {
      return;
    }
    this.tags.push(this.tagName);
    this.tagName = "";
    this.emitChanges();
  }

  removeTag(tagToRemove) {
    this.tags = this.tags.filter((tag) => tag !== tagToRemove);
    this.emitChanges();
  }
}
