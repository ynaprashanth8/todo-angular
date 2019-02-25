import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isError: boolean;
  errorMessage = 'Invalid Creditionals';

  constructor() { }

  ngOnInit() {
  }

  handlelogin() {
    console.log(this.userName);
    if (this.userName === 'Prashanth' && this.password === 'yna') {
     this.isError = false;
    } else {
      this.isError = true;
    }
  }

}
