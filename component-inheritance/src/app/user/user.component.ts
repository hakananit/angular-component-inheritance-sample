import { Component, Inject, InjectionToken } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';
import { ValidatorService } from '../validator.service';

const NAME = new InjectionToken<string>('name');
const SURNAME = new InjectionToken<string>('surname');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
    {
      provide: NAME, useValue: 'max',
    },
    {
      provide: SURNAME, useValue: 'mustermann'
    }
  ]
})
export class UserComponent extends BaseComponent {

  testForm: FormGroup;

  constructor(@Inject(NAME) _name: string, @Inject(SURNAME) _surname: string,
    private _fb: FormBuilder, private _validatorService: ValidatorService) {
    super(_name, _surname);
    this.testForm = this._fb.group({
      foo: ['', Validators.required, validate]
    });
  }

  
}

export function validate(control: AbstractControl): Observable<ValidationErrors> | null {
  return this._validatorService.validate(Number.parseInt(control.value,10)).pipe(
    map((result) => {
      if (!result) {
        return of({ valid: true });
      }
    }));
}