import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss'],
})
export class EmailConfirmationComponent implements OnInit {
  email = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.email = this.activatedRoute.snapshot.paramMap.get('email') as string;
  }
  submitForm(): void {
    console.log('Email: ' + this.email);
    const codeInput = document.querySelector(
      'input[matInput]',
    ) as HTMLInputElement;
    if (codeInput.value.match(/\d/)) {
      this.router.navigate([`/profile/${this.email}`]);
    }
  }
}
