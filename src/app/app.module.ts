import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
// import { UsesDetailsComponent } from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './components/layouts/main-layout/main-layout.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { ComponentComponent } from './components/component/component.component';

const routes: Route [] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path:':id', component:UserDetailsComponent}
        ]
      },
      {path: 'posts', component: PostsComponent, children: [
          {path:':id', component:PostDetailsComponent}
        ]},
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: ':id', component: CommentDetailsComponent}
        ]
      },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    // UsesDetailsComponent,
    PostDetailsComponent,
    PostComponent,
    PostsComponent,
    UserDetailsComponent,
    CommentsComponent,
    CommentDetailsComponent,
    HeaderComponent,
    MainLayoutComponent,
    UserComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
