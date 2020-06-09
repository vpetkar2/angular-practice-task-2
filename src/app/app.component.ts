import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { User, UserInit } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'companytask';
  public user: User = new UserInit();
  constructor(private sessionService: SessionService,
              private router: Router) {

    if(localStorage.getItem('isLogin')) {
      this.user.isLogin = true;
      this.sessionService.set(this.user);
      this.router.navigate(['/home']);
    } else {
      this.sessionService.set(new UserInit());
    }
  }

}
