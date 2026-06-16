import { ChangeDetectorRef, Component } from '@angular/core';
import { usersModel } from './features/users/model/users.model';
import { UsersServiceService } from './features/users/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: usersModel[] = [];

  constructor(
    private postService: UsersServiceService,
    private cdr: ChangeDetectorRef,
  ) {}

  onClick() {
    this.postService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('FALLÓ, REVISE:', err);
      },
      complete: () => {
        alert('OK');
      },
    });
  }
}