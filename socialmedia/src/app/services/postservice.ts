import { Injectable } from '@angular/core';
import { users ,User, Post ,posts} from '../models/userModel'

@Injectable({
  providedIn: 'root'
})
export class Postservice {
  private posts: Post[] = [];
  private currentpointer:number=0;

  loadPosts(){
    this.posts = [...this.posts , ...posts.slice(this.currentpointer, this.currentpointer+10)];
    this.currentpointer+=10;
  }
  getPosts(): Post[] {
    this.loadPosts()
    return this.posts;
  }
  pushPost(post:Post){
    console.log(this.posts.length)
    this.posts.push(post)
    console.log(this.posts.length)
  }
  getPostByID(id:number){
    if(this.posts.length===0){this.loadPosts()}
    let p:any = this.posts.find(p=>p.id==id)
    if(!p){return null}
    return p
  }
}
