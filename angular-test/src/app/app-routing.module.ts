import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { PostsComponent } from "./views/posts/posts.component";
import { CreatePostComponent } from "./views/create-post/create-post.component";

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
    path: "",
    pathMatch: "full",
    redirectTo: "posts",
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
