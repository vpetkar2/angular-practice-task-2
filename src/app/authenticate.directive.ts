import { Directive, HostListener, Input } from '@angular/core';
import { User, UserInit } from './user';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Directive({
  selector: '[appAuthenticate]'
})
export class AuthenticateDirective {

  @Input() value: FormGroup;
  public regArr = [];
  public user: User = new UserInit();

  constructor(private router: Router,
              public sessionService: SessionService) { }

  @HostListener('click', ['$event']) onClick($event) {
    if(this.value.valid) {
        this.regArr = localStorage.getItem('reg_data')==null ? [] : JSON.parse(localStorage.getItem('reg_data'));
        let auth = this.regArr.findIndex(x => x.email == this.value.value.email && x.password == this.value.value.password);
        console.log(auth, this.value);
        if(auth != -1) {
          this.user.isLogin = true;
          this.sessionService.set(this.user);
          localStorage.setItem('isLogin', 'true');
          this.router.navigate(['/home']);
        } else {
          alert('Invalid Credentials');
        }
    } else {
      this.value.markAsDirty();
      this.value.markAsTouched();
      this.value.markAllAsTouched();
    }

  }
}
