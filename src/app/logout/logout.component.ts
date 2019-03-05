import { Component, OnInit } from '@angular/core';
import { HardCodedAutheticationService } from '../service/hard-coded-authetication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAutheticationService: HardCodedAutheticationService) { }

  ngOnInit() {
    this.hardCodedAutheticationService.logout();
  }

}
