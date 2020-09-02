import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout-parts/header/header.component";
import { FooterComponent } from "./components/layout-parts/footer/footer.component";
import { PostsComponent } from "./views/posts/posts.component";
import { CreatePostComponent } from "./views/create-post/create-post.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostItemComponent } from "./components/post-item/post-item.component";
import { ImageComponent } from './components/shared/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    CreatePostComponent,
    PostItemComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
