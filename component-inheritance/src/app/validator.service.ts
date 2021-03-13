import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  validate(value: number): Observable<boolean> {
    if (value > 10) {
      return of(true);
    }
    return of(false);
  }
}
