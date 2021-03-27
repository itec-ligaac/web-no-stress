import { Component, OnInit } from '@angular/core';
import {_destinations} from '../../../mock-destinations';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  dest = _destinations;


  ngOnInit(): void {

  }

}
