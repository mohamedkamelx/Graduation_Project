import { Component, Input, OnInit } from '@angular/core';
import { users ,User, Post, me, CommentObj } from '../models/userModel'
import { Commentservice } from '../services/commentservice';

@Component({
  selector: 'app-comment',
  standalone: false,
  templateUrl: './comment.html',
  styleUrl: './comment.css'
})
export class Comment implements OnInit {
  @Input() postid:number =0 
  mycomments:CommentObj[]=[];
  constructor(private _commentservice:Commentservice){}
  ngOnInit(): void {
    this.mycomments = this._commentservice.getComments(this.postid)
  }
}
