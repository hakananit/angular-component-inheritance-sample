import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { BaseComponent } from '../base/base.component';

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
export class UserComponent extends BaseComponent implements OnInit {

  constructor(@Inject(NAME) _name: string, @Inject(SURNAME) _surname: string) {
    super(_name, _surname);
  }

  ngOnInit(): void {

  }

}
