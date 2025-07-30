import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Feed } from './feed/feed';
import { Posts } from './posts/posts';
import { Postform } from './postform/postform';
import { Postdetail } from './postdetail/postdetail';
import { Comment } from './comment/comment';
import { Login } from './login/login';
import { Register } from './register/register';

@NgModule({
  declarations: [
    App,
    Navbar,
    Feed,
    Posts,
    Postform,
    Postdetail,
    Comment,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
