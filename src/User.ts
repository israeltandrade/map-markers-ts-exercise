import { faker } from "@faker-js/faker";
// Implementação opcional da interface (para ajudar com debug):
import { Mappable } from './CustomMap';


// Implementação da interface Mappable
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}