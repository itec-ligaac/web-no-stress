import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../../../services/destinations.service';
import {DestinationModel} from '../../../models/destination-model';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  destinations: DestinationModel[] = [];

  constructor(private destinationsService: DestinationsService) { }


  public async ngOnInit() {
    this.destinations = await this.destinationsService.get();
  }

}
