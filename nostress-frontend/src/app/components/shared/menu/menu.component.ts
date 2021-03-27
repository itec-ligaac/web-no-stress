import {Component, OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {LandingPageComponent} from '../../pages/landing-page/landing-page.component';
import {DestinationsPageComponent} from '../../pages/destinations-page/destinations-page.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
