import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  apiUrl = environment.apiUrl;

  constructor() {}

  ngOnInit() {}
}
