import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Post } from "src/app/models/post.model";

const POSTS_ENDPOINT = "posts";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private apiService: ApiService) {}

  fetchPosts(): Promise<Post[]> {
    return this.apiService.get(POSTS_ENDPOINT);
  }
}
