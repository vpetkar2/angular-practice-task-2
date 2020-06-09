import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public regArr = [];
  public RegForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              private router: Router) {
    this.RegForm = formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        repassword: ['', Validators.required]
    }, {validator: this.checkPasswords });
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
    ],
    repassword: [
      { type: 'required', message: 'Repassword is required' }
    ],

  };

  ngOnInit() {
    this.regArr = localStorage.getItem('reg_data')==null ? [] : JSON.parse(localStorage.getItem('reg_data'));
  }

  registration() {
    if(this.RegForm.valid) {
      this.regArr.push(this.RegForm.value);
      localStorage.setItem('reg_data', JSON.stringify(this.regArr));
      alert('Registration Done Successfully');
      this.router.navigate(['/login']);
    } else {
      this.RegForm.markAsDirty();
      this.RegForm.markAsTouched();
      this.RegForm.markAllAsTouched();
    }
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('repassword').value;
    
    return pass === confirmPass ? null : { notSame: true }
  }

  get name() {
    return this.RegForm.get('name');
  }

  get email() {
    return this.RegForm.get('email');
  }

  get password() {
    return this.RegForm.get('password');
  }

  get repassword() {
    return this.RegForm.get('repassword');
  }
}