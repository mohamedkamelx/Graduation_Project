import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  login(username:string,password:string){
    console.log("you are logged in ")
  }
  register(username:string,password:string){
    console.log("you are registered ")
  }
  logout(){}
  getusers(){}
  getuserById(id:number){}
}
