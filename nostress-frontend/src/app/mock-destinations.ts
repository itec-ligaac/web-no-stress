import {DestinationModel} from './models/destination-model';
export const _destinations: DestinationModel[] = [
{
  name: 'City1',
    country: 'Country1',
  picture: 'assets/images/paris.png',
  hotels:[{
    name: 'Hotel1',
    stars: 5,
    price: 91
  }, {
    name: 'Hotel2',
    stars: 3,
    price: 1,
  }],
},
  {
    name: 'Beach1',
    country: 'Country2',
    picture: 'assets/images/pisa.png',
    hotels:[{
      name: 'Hotel1',
      stars: 5,
      price: 99
    }, {
      name: 'Hotel2',
      stars: 3,
      price: 1,
    }],
  }, {
    name: 'Mountain15',
    country: 'Country5',
    picture: 'assets/images/italy.png',
    hotels:[{
      name: 'Hotel1',
      stars: 5,
      price: 91
    }, {
      name: 'Hotel2',
      stars: 7,
      price: 1,
    }],
  }, {
    name: 'waterfall4',
    country: 'Romania',
    picture: 'assets/images/egipt.png',
    hotels:[{
      name: 'Hotel1',
      stars: 5,
      price: 50
    }, {
      name: 'Hotel2',
      stars: 3,
      price: 10,
    }],
  }
]
