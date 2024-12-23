import { Component } from '@angular/core';
import { Residence } from '../../core/models/residence.model';
import { CommonService } from '../../core/services/common.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/elfel.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/elyasmine.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/elarij.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/elanber.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];
  searchQuery: string = '';
  addressCount: number = 0;
  
  constructor(private commonService: CommonService) {}


  showLocation(address: string): void {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      alert(`L'adresse est : ${address}`);
    }
  }

  addToFavorites(residence: Residence): void {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }

  getFilteredResidences(): Residence[] {
    return this.listResidences.filter(residence => 
      residence.address.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  countResidencesWithSameAddress(address: string): void {
    this.addressCount = this.commonService.getSameValueOf(this.listResidences, 'address', address);
  }
}
