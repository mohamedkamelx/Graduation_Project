import { Component, OnInit } from '@angular/core';
import { users ,User, Post } from '../models/userModel'
import { Postservice } from '../services/postservice';

@Component({
  selector: 'app-feed',
  standalone: false,
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})
export class Feed implements OnInit{
  myposts:Post[]=[];
  constructor(private _postService:Postservice){}
  ngOnInit(): void {
      this.myposts = this._postService.getPosts()
  }

}
