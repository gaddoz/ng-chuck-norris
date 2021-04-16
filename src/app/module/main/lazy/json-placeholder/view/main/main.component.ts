import { Component, ViewChild } from '@angular/core';
import { Post, PostsService, Comment, User, UsersService } from 'generated-sources/api/jsonpl';
import { CommentsService } from 'generated-sources/api/jsonpl/api/comments.service';
import { concat, forkJoin, Observable, of } from 'rxjs';
import { concatAll, map, mergeMap, switchMap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

interface PostInfo extends Post {
  comments?: Comment[];
  user?: User;
}
@Component({
  selector: 'app-json-placeholder-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  @ViewChild(ModalComponent) refComments: ModalComponent;
  posts$: Observable<PostInfo[]>;
  selectedPost: PostInfo;
  constructor(
    private postsService: PostsService,
    private commentService: CommentsService,
    private usersService: UsersService) {

    this.posts$ = this.postsService.listPosts().pipe(
      mergeMap((posts: Post[]) => {
        if (posts.length > 0) {
          return forkJoin(
            posts.map((post: PostInfo) => this.commentService.getCommentsByPostId(post?.id||0).pipe(
                map((comments: Comment[]) => {
                  post.comments = comments;
                  return post;
                })
              ))
          );
        }
        return of([]);
      }),
      mergeMap((posts: PostInfo[]) => {
        if (posts.length > 0) {
          return forkJoin(
            posts.map((post: PostInfo) => this.usersService.getUser(post?.userId||0).pipe(
                map((user: User) => {
                  post.user = user;
                  return post;
                })
              ))
          );
        }
        return of([]);
      }),
    );

  }

  showCommentsPosts(post: any){
    this.selectedPost = post;
    this.refComments.openModal();
  }

}
