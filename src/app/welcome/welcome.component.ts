import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //Dependency Injection
  //This will help to pass the user mae as a param to the welcom url
  constructor(private route: ActivatedRoute) { }
  name: string;
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

}
