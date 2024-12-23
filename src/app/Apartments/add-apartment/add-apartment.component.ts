import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm: FormGroup<{
    apartmentNumber: FormControl<string | null>; floorNumber: FormControl<string | null>; surface: FormControl<string | null>; terrace: FormControl<string | null>; surfaceTerrace: FormControl<string | null>; category: FormControl<string | null>; // Valeur par défaut : 'S+1'
    residence: FormControl<string | null>;
  }> | undefined;
  constructor() {}
  ngOnInit(): void {
    this.apartForm = new FormGroup({
      apartmentNumber: new FormControl('', Validators.required),
      floorNumber: new FormControl('', Validators.required),
      surface: new FormControl('', [Validators.required, Validators.min(1)]),
      terrace: new FormControl('', Validators.required),
      surfaceTerrace: new FormControl('', Validators.min(0)),
      category: new FormControl('S+1', Validators.required), // Valeur par défaut : 'S+1'
      residence: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void {
    if (this.apartForm!.valid) {
      console.log('Formulaire soumis :', this.apartForm?.value);
    } else {
      console.log('Formulaire invalide');
    }
  }

  onReset(): void {
    this.apartForm?.reset({
      category: 'S+1', // Réinitialise avec la valeur par défaut
      terrace: ''
    });
  }
}
