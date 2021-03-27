import {Component, OnInit, Pipe} from '@angular/core';
import {DestinationModel} from '../../../models/destination-model';
import {DestinationsService} from '../../../services/destinations.service';

@Component({
  selector: 'app-destinations-page',
  templateUrl: './destinations-page.component.html',
  styleUrls: ['./destinations-page.component.scss']
})
export class DestinationsPageComponent implements OnInit {

  constructor(private destinationsService: DestinationsService) {
  }

  public criteria: any[] = [];
  initialDestinations: DestinationModel[] = [];

  destinations: DestinationModel[] = [];

  public checked: boolean[] = [];

  public initChecked(): void {
    for (let i = 0; i < this.criteria.length; i++) {
      this.checked.push(false);
    }
  }

  ngOnInit(): void {
    this.destinationsService.getJSON().subscribe(data => {
      this.destinations = data;
    });
    this.initialDestinations = this.destinations;
    this.setCriteria();
    this.initChecked();
  }

  public filterDestinations(criteria: any, index: number): void {

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

    if (this.checked[index]) {
      this.checked[index] = false;
    } else {
      this.checked[index] = true;
      this.destinations = visibleDestinations;
    }
  }


  public setCriteria(): void {
    for (const destination of this.destinations) {
      if (!this.criteria.includes(destination.country)) {
        this.criteria.push(destination.country);
      }
    }
    this.criteria.push(-2);
    for (let i = 1; i <= 5; ++i) {
      this.criteria.push(i);
    }
    this.criteria.push(-3);
    for (let i = 1000; i <= 10000; i += 1000) {
      this.criteria.push(i);
    }
  }

  public reset(): void {
    this.destinations = this.initialDestinations;
    this.checked.length = 0;
    this.initChecked();
  }

  public isNumber(val: any): boolean {
    return typeof val === 'number';
  }


}
