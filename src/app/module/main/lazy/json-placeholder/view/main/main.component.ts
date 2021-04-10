import { Component } from '@angular/core';
import { Post, PostsService, User, UsersService } from 'generated-sources/api/jsonpl';
import { CommentsService } from 'generated-sources/api/jsonpl/api/comments.service';
import { forkJoin, Observable } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-json-placeholder-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  data: any[] = [];
  selectedPost: any= undefined;
  constructor(
    private postsService: PostsService,
    private commentService: CommentsService,
    private usersService: UsersService) {

// this.postsService.newPost({
    //   title:'new title',
    //   body:'new body',
    // }).subscribe(res => {
    //   console.log(res);
    // });

    // this.usersService.newUser({
    //   name:'new user',
    //   email:'newuser@sample.com',
    // }).subscribe(res => {
    //   console.log(res);
    // });

    // this.commentService.newComment({
    //   postId: 1,
    //   name: 'new user',
    //   email: 'newuser@sample.com',
    //   body: 'new comment',
    // }).subscribe(res => {
    //   console.log(res);
    // });

    // this.postsService.putPost(1,{
    //   title: 'new title',
    // }).subscribe(res => {
    //   console.log(res);
    // });

    // this.postsService.getPost(101).subscribe(res => {
    //   console.log(res);
    // });

    // this.postsService.getPost(1).subscribe(res => {
    //   console.log(res);
    // });

    // this.postsService.listPosts().subscribe(res => {
    //   console.log(res);
    // });

    // this.commentService.listComments().subscribe(res => {
    //   console.log(res);
    // });

    // this.commentService.getCommentsByPostId(1).subscribe(res => {
    //   console.log(res);
    // });

    // this.usersService.listUsers(1,9).subscribe(res => {
    //   console.log(res);
    // });

    // this.commentService.getCommentsByPostId(1,1,1,'response').subscribe(res => {
    //   console.log(res);
    // });

    // this.postsService.listPosts('MED',1,3).subscribe(res => {
    //   console.log(res);
    // });

    // full load posts -> comments + post -> user
    this.postsService.listPosts()
    .pipe(
      mergeMap(ps => forkJoin(this.getPostsComments(ps))),
    )
    .pipe(
      mergeMap(pc => forkJoin(this.getPostsUsers(pc))),
    )
    .subscribe(res=> {
      console.log('full load res:',res);
      this.data = res;
    });
  }

  getPostsComments(posts: any[]){
      return posts.map(p =>
        this.commentService.getCommentsByPostId(p?.id||0)
        .pipe(map(c => ({post: p, comments: c})))
      );
  }

  getPostsUsers(posts: any[]){
      return posts.map(p =>
        this.usersService.getUser(p?.post.userId||0)
        .pipe(map(u => ({post: p.post, comments: p.comments, user: u})))
      );
  }

}
