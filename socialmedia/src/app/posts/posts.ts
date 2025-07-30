import { Component, Input } from '@angular/core';
import { users ,User, Post, me } from '../models/userModel'
import { Commentservice } from '../services/commentservice';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  @Input() myposts: Post [] = []
  constructor(private _commentservice:Commentservice){}
  getpost(id:number){return this.myposts.find(p => p.id === id);}
  addlike(id:number){
    const post = this.getpost(id)
    if (post==undefined) { return }
    if (!post.isliked) {
      post.isliked=true;
      post.likecount++;
    }else{
      post.isliked=false;
      post.likecount--;
    }
  }

  share(id:number){}
  deletepost(id:number){}
}
