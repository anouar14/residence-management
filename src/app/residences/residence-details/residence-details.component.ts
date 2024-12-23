import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
})
export class ResidenceDetailsComponent {
  residence: any; // À remplacer par le modèle Residence
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residence = this.getResidenceById(id); // Remplacer par une vraie méthode
  }

  goToNextResidence() {
    const nextId = this.residence.id + 1; // Logique à adapter
    this.router.navigate(['/residence', nextId]);
  }

  getResidenceById(id: number) {
    // Méthode fictive pour récupérer une résidence par ID
    return { id, name: 'Résidence Test', address: 'Adresse Test' };
  }
}
