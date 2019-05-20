import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

function isRequiredValidator(Identifiant: string, Titre: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (control.get(Identifiant).value !== '' || control.get(Titre).value !== '') {
      return null;
    } else {
      return { isRequired: `L'un des deux champs 'Identifiant' ou 'Titre' doit être renseigné` };
    }
  };
}

function rangeDateValidator(minYear: Date, maxYear: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputDate = control.value;
    if ((inputDate >= minYear.getFullYear()) && (inputDate <= maxYear.getFullYear())) {
      return null;
    } else {
      return { min: `L'année doit être comprise entre ${minYear.getFullYear()} et ${maxYear.getFullYear()}` };
    }
  };
}


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  myForm: FormGroup;
  minDate: Date = new Date(1900, 0, 1);
  maxDate: Date = new Date();


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: this.fb.group({
        identifiant: [''],
        titre: ['']
      }, { validator: isRequiredValidator('identifiant', 'titre') }),
      type: ['serie'],
      annee: ['', rangeDateValidator(this.minDate, this.maxDate)],
      fiche: [''],
    });

    this.myForm.patchValue({
      fiche: 'courte'
    });

  }



  onSubmit(response: FormGroup) {
    // autre solution :
    // console.log(JSON.stringify(this.myForm.value));

    response.valid ? console.log(this.myForm.value) : console.log('Invalid')
  }

}
