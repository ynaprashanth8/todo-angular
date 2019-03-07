import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //Dependency Injection
  //This will help to pass the user mae as a param to the welcom url
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService ) { }
  name: string;
  messageFromService : string
  errorMessageFromService : string 
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
   
  gettheMessage(){
    this.welcomeDataService.executeHelloBeanService().subscribe(
      response => this.handleSucceccfulResponse(response),
      error => this.handleErrorResponse(error)
    ); 
  }

  gettheMessageWithParam(){
    this.welcomeDataService.executeHelloBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSucceccfulResponse(response),
      error => this.handleErrorResponse(error)
    ); 
  }

  handleSucceccfulResponse(response){
    this.messageFromService = response.message;
  }
 
  handleErrorResponse(error){
    this.errorMessageFromService = error.error.message;
  }
}
