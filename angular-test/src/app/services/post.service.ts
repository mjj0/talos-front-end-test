import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Post } from "src/app/models/post.model";
import { HttpClient } from "@angular/common/http";

const POSTS_ENDPOINT = "posts";
const POST_DETAILS_ENDPOINT = (id: string) => `${POSTS_ENDPOINT}/${id}`;
const UPLOAD_POST_IMAGE_ENDPOINT = (id: string) =>
  `${POST_DETAILS_ENDPOINT(id)}/picture`;

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private apiService: ApiService, private http: HttpClient) {}

  fetchPosts(): Promise<Post[]> {
    return this.apiService.get(POSTS_ENDPOINT);
  }

  fetchPostDetails(id: string): Promise<Post> {
    return this.apiService.get(POST_DETAILS_ENDPOINT(id));
  }

  createPost(title: string, description: string, tags: string[]) {
    return this.apiService.post(POSTS_ENDPOINT, {
      title,
      description,
      tags,
    });
  }

  uploadPostImage(id: string, image: string | File) {
    const form = new FormData();
    form.append("id", id);
    form.append("image", image);
    return this.apiService.put(UPLOAD_POST_IMAGE_ENDPOINT(id), form);
  }
}
