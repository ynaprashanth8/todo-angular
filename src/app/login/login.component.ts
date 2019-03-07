import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAutheticationService } from '../service/hard-coded-authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  invalidLogin: boolean;
  errorMessage = 'Invalid Creditionals';
  //This is way to inject the router. Where private will be the access.
  constructor(private router: Router,
    private hardCodedAuthetication : HardCodedAutheticationService) { }
  ngOnInit() {
  }

  handlelogin() {
    if (this.hardCodedAuthetication.authetication(this.userName, this.password)) {
      //These can be accessed as a member varables to route to welcome with param (name).
      this.router.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
