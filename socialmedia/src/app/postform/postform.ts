import { Component, Input } from '@angular/core';
import { users, posts ,User, Post, me } from '../models/userModel'
import { Postservice } from '../services/postservice';

@Component({
  selector: 'app-postform',
  standalone: false,
  templateUrl: './postform.html',
  styleUrl: './postform.css'
})
export class Postform {
  myposts: Post[] = [];
  constructor(private _postService:Postservice){
     this.myposts = this._postService.getPosts();
  }
  newPost = {
    text: '',
    image: ''
  };
  submitPost() {
    if (this.newPost.text.trim()) {
      const post:Post = {
          id:this.myposts.length > 0 ? this.myposts.at(-1)!.id + 11 : 11 ,
          text: this.newPost.text,
          post_image: this.newPost.image ,
          user:me,
          likecount: 0,
          commentscount: 0,
          sharecount: 0,
          sharetime: new Date,
          isliked :false,
          commentList:[],
          likeList:[]
      };
      this._postService.pushPost(post);
      this.myposts = this._postService.getPosts()
      this.newPost = { text: '', image: '' };
    }
  }
}
