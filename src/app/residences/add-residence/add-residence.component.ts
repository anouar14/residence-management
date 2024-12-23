import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.residenceForm = this.fb.group({
      id: [''],  // Champ caché (si besoin)
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, this.urlValidator]],
      status: ['Disponible'],
      apartments: this.fb.array([])  // FormArray pour gérer les appartements
    });
  }

  // Fonction de validation d'URL
  urlValidator(control: AbstractControl): ValidationErrors | null {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(control.value) ? null : { invalidUrl: true };
  }

  get apartments() {
    return (this.residenceForm.get('apartments') as FormArray);
  }

  addApartment() {
    const apartmentGroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      floor: ['', Validators.required]
    });

    this.apartments.push(apartmentGroup);
  }

  onSubmit() {
    if (this.residenceForm.valid) {
      console.log(this.residenceForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
