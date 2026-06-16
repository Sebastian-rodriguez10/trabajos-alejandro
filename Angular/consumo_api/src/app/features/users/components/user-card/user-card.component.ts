import { Component, Input, input } from '@angular/core';
import { usersModel } from '../../model/users.model';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: usersModel;
}
