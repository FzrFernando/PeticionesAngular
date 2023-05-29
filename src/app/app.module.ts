import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ApiService } from './api.service';

const routes: Routes = [
  {
    path:'users',
    component: UserlistComponent,
    children: [
      {
        path: 'detail/:uid',
        component: UserdetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserlistComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
