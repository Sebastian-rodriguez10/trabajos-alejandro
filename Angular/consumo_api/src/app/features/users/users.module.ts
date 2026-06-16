import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserCardComponent, UsersListComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
