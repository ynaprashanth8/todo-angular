import { Component, OnInit } from '@angular/core';
import { HardCodedAutheticationService } from '../service/hard-coded-authetication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardCodedAutheticationService: HardCodedAutheticationService) { }

  ngOnInit() {
  }

}
