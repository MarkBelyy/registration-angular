import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  showPasswordError = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.pattern(/[a-zA-Z0-9]+/),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator },
    );
  }
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
  submitForm(): void {
    if (this.registerForm.valid) {
      console.log('wfewefw');
      this.router.navigate([
        `/email-confirmation/${this.registerForm.value.email}`,
      ]);
    } else {
      // Обработка ошибок формы
      console.log('форма невалидна');
      this.showPasswordError = true;
    }
  }
}
