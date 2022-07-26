import { faker } from "@faker-js/faker";

// Exportação da classe para uso em outros lugares:
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // A conversão para números foi necessária porque a livraria
      // "faker" cria valores como string:
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}