/// <reference types="@types/google.maps" />
// Instruções para qualquer outra classe que possa servir de argumento
// para o método 'addMarker':
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  // Segunda exigência da interface:
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    // Atribuição de instância à uma constante:
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  // Evento quando clicar na marker:
  marker.addListener('click', () => {
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

      infoWindow.open(this.googleMap, marker);
    });
  }
}