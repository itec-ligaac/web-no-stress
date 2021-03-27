import {Component, OnInit, Pipe} from '@angular/core';
import {DestinationModel} from '../../../models/destination-model';

@Component({
  selector: 'app-destinations-page',
  templateUrl: './destinations-page.component.html',
  styleUrls: ['./destinations-page.component.scss']
})
export class DestinationsPageComponent implements OnInit {

  public criteria: any[] = [];
  destinations: DestinationModel[] = [
    {
      name: 'Dubai',
      country: 'Saudi Arabia',
      hotels: [
        {name: 'Hotel1', price: 10000, stars: 5},
        {name: 'Hotel2', price: 15000, stars: 3},
        {name: 'Hotel3', price: 8000, stars: 4}
      ],
      picture: 'assets/images/pisa.png'
    },
    {
      name: 'Sk1',
      country: 'Austria',
      hotels: [
        {name: 'Primul1', price: 5000, stars: 5},
        {name: 'Primul2', price: 3000, stars: 2},
        {name: 'Primul3', price: 3000, stars: 4}
      ],
      picture: 'assets/images/pisa.png'
    },
    {
      name: 'Sk2',
      country: 'Austria',
      hotels: [
        {name: 'Aldoilea1', price: 4500, stars: 5},
        {name: 'Aldoilea2', price: 2500, stars: 3},
        {name: 'Aldoilea3', price: 3500, stars: 4}
      ],
      picture: 'assets/images/pisa.png'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
      this.setCriteria();
  }

  public filterDestinations(criteria: any): void {
    const visibleDestinations: DestinationModel[] = [];

    for (const destination of this.destinations) {
      if (destination.country === criteria) {
        visibleDestinations.push(destination);
      }
      for (const hotel of destination.hotels) {
        if (hotel.stars === criteria) {
          visibleDestinations.push(destination);
        }
        if (hotel.price >= criteria - 1000 && hotel.price <= criteria + 1000) {
          visibleDestinations.push(destination);
        }
      }
    }

    this.destinations = visibleDestinations;
  }

  public setCriteria(): void {
    for (const destination of this.destinations) {
        if (!this.criteria.includes(destination.country)) {
            this.criteria.push(destination.country);
        }
    }
    for (let i = 1; i <= 5; ++i) {
        this.criteria.push(i);
    }
    for (let i = 1000; i <= 10000; i += 1000) {
        this.criteria.push(i);
    }
  }

}
