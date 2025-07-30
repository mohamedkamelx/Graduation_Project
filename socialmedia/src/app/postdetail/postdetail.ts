import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users ,User, Post, me } from '../models/userModel'
import { Postservice } from '../services/postservice';
import { Commentservice } from '../services/commentservice';

@Component({
  selector: 'app-postdetail',
  standalone: false,
  templateUrl: './postdetail.html',
  styleUrl: './postdetail.css'
})
export class Postdetail implements OnInit {
  me=me
  postId!: number;
  myposts: Post [] = []
  constructor(private route: ActivatedRoute,private _postService:Postservice,private _commentservice:Commentservice) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.myposts.push(this._postService.getPostByID(this.postId))
  }
  createcomment(x:string){this._commentservice.pushcomment(this.postId,x)}

}
