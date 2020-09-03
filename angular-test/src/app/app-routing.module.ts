import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { PostsComponent } from "./views/posts/posts.component";
import { CreatePostComponent } from "./views/create-post/create-post.component";
import { PostDetailsComponent } from "./views/post-details/post-details.component";

const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "posts/create",
    component: CreatePostComponent,
  },
  {
    path: "posts/:id",
    component: PostDetailsComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "posts",
  },
  {
    path: "**",
    redirectTo: "/posts",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
