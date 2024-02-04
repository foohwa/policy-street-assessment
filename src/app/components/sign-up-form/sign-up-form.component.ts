import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {JsonPipe, NgIf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";

export interface SignUpForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  termsAndConditions: boolean;
}

export const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  providers: [provideNativeDateAdapter(CUSTOM_DATE_FORMAT)],
  imports: [
    MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButton, NgIf, JsonPipe, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatDatepicker
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {
  public formGroup: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    termsAndConditions: new FormControl(null, Validators.required)
  });

  signUp() {
    console.log(this.formGroup.value as SignUpForm);
  }
}
