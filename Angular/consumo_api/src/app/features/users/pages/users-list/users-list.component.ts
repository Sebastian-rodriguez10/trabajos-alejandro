import { Component, Input } from '@angular/core';
import { usersModel } from '../../model/users.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() userList: usersModel[];
}
