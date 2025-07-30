import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feed } from './feed/feed';
import { Postform } from './postform/postform';
import { Postdetail } from './postdetail/postdetail';
import { Login } from './login/login';
import { Register } from './register/register';

const routes: Routes = [
  {path:'',component:Feed},
  {path:'feed',component:Feed},
  {path:'post/:id', component:Postdetail},
  {path:'createpost',component:Postform},
  {path:'login',component:Login},
  {path:'register',component:Register}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
