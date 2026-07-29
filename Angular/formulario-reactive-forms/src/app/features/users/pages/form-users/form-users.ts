import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-users',
  standalone: false,
  templateUrl: './form-users.html',
  styleUrl: './form-users.scss',
})
export class FormUsers {
  form: FormGroup;
  mostrarDatos = false;
  datosCapturados: any = null;
  viewPassword= false;

  togglePassword() {
  this.viewPassword = !this.viewPassword;
}

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    console.log(password, confirmPassword);

    if (password === confirmPassword) {
      return null;
    }

    return {
      errorConfirmPassword: true,
    };
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
        terms: [false, [Validators.requiredTrue]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  onClick() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.datosCapturados = this.form.value;
      this.mostrarDatos = true;
    }
  }

  cerrarModal() {
    this.mostrarDatos = false;
    this.form.reset({ terms: false });
  }
}
