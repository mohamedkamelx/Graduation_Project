import { Injectable } from '@angular/core';
import { users ,User, Post ,posts, CommentObj,me} from '../models/userModel'

@Injectable({
  providedIn: 'root'
})
export class Commentservice {
  
  private comments:CommentObj[] =[]
  loadComments(postid:number){
    let  x = posts.find(p=>p.id==postid)?.commentList
    if (!x){return}
    return x
  }
  getComments(postid:number){
    this.comments = this.loadComments(postid) || []
    return this.comments
  }
  pushcomment(postId:number,text:string){
     this.comments.push({user:me,text:text,time:new Date()})
     let x =posts.find(p=>p.id==postId)
     if(!x){return}
     x.commentscount ++
  }
}
