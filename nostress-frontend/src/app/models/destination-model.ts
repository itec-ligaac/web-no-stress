import {HotelModel} from './hotel-model';

export interface DestinationModel {
  name: string;
  country: string;
  hotels: HotelModel[];
  picture?: string;
  danger?: number;
}
