import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder) {

    this.LoginForm = formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
    ]
  };

  ngOnInit() {
  }

  get email() {
    return this.LoginForm.get('email');
  }

  get password() {
    return this.LoginForm.get('password');
  }
}
