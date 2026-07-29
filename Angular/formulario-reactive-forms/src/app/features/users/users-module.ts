import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsers } from './pages/form-users/form-users';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormUsers],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormUsers]
})
export class UsersModule {}
