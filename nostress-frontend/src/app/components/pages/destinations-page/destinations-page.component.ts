import {Component, OnInit, Pipe} from '@angular/core';
import {DestinationModel} from '../../../models/destination-model';
import {DestinationsService} from '../../../services/destinations.service';

@Component({
  selector: 'app-destinations-page',
  templateUrl: './destinations-page.component.html',
  styleUrls: ['./destinations-page.component.scss']
})
export class DestinationsPageComponent implements OnInit {

  public criteria: any[] = [];
  initialDestinations: DestinationModel[] = [];
  destinations: DestinationModel[] = [];

  destinationCopy:DestinationModel[]=this.destinations;

  public checked: boolean[] = [];

  constructor(private destinationsService: DestinationsService) {
  }

  public initChecked(): void {
    for (let i = 0; i < this.criteria.length; i++) {
      this.checked.push(false);
    }
  }

  public async ngOnInit() {
    this.destinations = await this.destinationsService.getJSON();
    this.initialDestinations = this.destinations;
    this.destinationCopy=this.destinations;
    this.setCriteria();
    this.initChecked();
  }

  public isCountry(val:any):boolean{
    return !this.isNumber(val);
}

public isStars(val:any):boolean{
    return this.isNumber(val) && val<6 && val>0;
}
public isPrice(val:any):boolean{
    return this.isNumber(val) && val>5 && val>0;
}

public criterias:boolean[]=[];

  public filterDestinations(criteria: any, index: number): void {
    if (!this.criterias[index]) {
      this.criterias[index]=true;

      const visibleDestinations: DestinationModel[] = [];

      for (const destination of this.destinations) {
        let allGood: boolean = false;
        let goodCountry: boolean = true;
        let goodHotel: boolean = false;
        if (this.isCountry(criteria)) {
          if (destination.country !== criteria) {
            goodCountry = false;
          }
        }
        for (const hotel of destination.hotels) {
          if (this.isStars(criteria))
            if (hotel.stars === criteria) {
              goodHotel = true;
            }
          if (this.isPrice(criteria))
            if (hotel.price >= criteria - 1000 && hotel.price <= criteria + 1000) {
              goodHotel = true;
            }
        }
        if ((goodCountry && goodHotel) || (goodCountry && this.isCountry(criteria))) allGood = true;
        if (allGood) visibleDestinations.push(destination);
      }

      if (this.checked[index]) {
        this.checked[index] = false;
      } else {
        this.checked[index] = true;
      }
      this.destinations = visibleDestinations;
    } else {

      this.criterias[index]=false;
      this.destinations=this.destinationCopy;
      let _index:number=-1;
      for(let crit of this.criteria){
        _index++;
        if(this.criterias[_index]){
          this.criterias[_index]=false;
          if (this.checked[_index]) {
            this.checked[_index] = false;
          } else {
            this.checked[_index] = true;
          }
          this.filterDestinations(crit, _index);
        }
      }

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
    for(let c of this.criteria) {
     this.criterias.push(false);
    }
    }

  public reset(): void {
    this.destinations = this.initialDestinations;
    this.checked.length = 0;
    this.criteria.length = 0;
    this.criterias.length = 0;
    this.setCriteria();
    this.initChecked();
  }

  public isNumber(val: any): boolean {
    return typeof val === 'number';
  }


}
