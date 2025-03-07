import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {emailValidator} from "./email-validator.directive";
import {NgClass, NgIf} from "@angular/common";

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean;
}

type UserForm = {
  name: FormControl;
  nickname: FormControl;
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-form-validate',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './form-validate.component.html',
  styleUrl: './form-validate.component.scss'
})
export class FormValidateComponent {

  reactiveForm!: FormGroup<UserForm>;
  user: IUser;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  constructFormUsingFormBuilder(): void {
    this.reactiveForm = this._formBuilder.group({
      name: [this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]],
      nickname: [this.user.nickname, [
        Validators.maxLength(10),
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]],
    });
  }

  get name() {
    return this.reactiveForm.controls.name;
  }

  get nickname() {
    return this.reactiveForm.controls.nickname;
  }

  get email() {
    return this.reactiveForm.controls.email;
  }

  get password() {
    return this.reactiveForm.controls.password;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
    }

    const user = this.reactiveForm.value;

    console.info('Name:', user.name);
    console.info('Nickname:', user.nickname);
    console.info('Email:', user.email);
    console.info('Password:', user.password);
  }

}
