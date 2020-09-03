import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Post } from "src/app/models/post.model";

const POSTS_ENDPOINT = "posts";
const POST_DETAILS_ENDPOINT = (id: string) => `${POSTS_ENDPOINT}/${id}`;

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private apiService: ApiService) {}

  fetchPosts(): Promise<Post[]> {
    return this.apiService.get(POSTS_ENDPOINT);
  }

  fetchPostDetails(id: string): Promise<Post> {
    return this.apiService.get(POST_DETAILS_ENDPOINT(id));
  }

  createPost(
    title: string,
    description: string,
    tags: string[],
    photo?: string
  ) {
    return this.apiService.post(POSTS_ENDPOINT, {
      title,
      description,
      tags,
      photo,
    });
  }
}
