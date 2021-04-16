import { Component, ViewChild } from '@angular/core';
import { Post, PostsService, Comment, User, UsersService } from 'generated-sources/api/jsonpl';
import { CommentsService } from 'generated-sources/api/jsonpl/api/comments.service';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
interface SelectedPost extends Post {
  comments?: Comment[];
}
@Component({
  selector: 'app-json-placeholder-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
   @ViewChild(ModalComponent) refComments: ModalComponent;
  posts$: Observable<Post[]>;
  selectedPostId$ = new Subject<number>();
  selectedPost: SelectedPost;
  constructor(
    private postsService: PostsService,
    private commentService: CommentsService,
    private usersService: UsersService) {

    // comments pipe wip
    this.posts$ = this.postsService.listPosts();
  }

  showCommentsPosts(post: any){
    this.selectedPostId$.next(post);
    console.log('showCommentsPosts', post);
    this.refComments.openModal();
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
